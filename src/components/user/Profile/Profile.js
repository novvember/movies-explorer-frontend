import classNames from 'classnames';
import React from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import { PLACEHOLDERS, REQUEST_ERRORS } from '../../../utils/config';
import useFilledForm from '../../../utils/hooks/useFilledForm';
import mainApi from '../../../utils/MainApi';
import Header from '../../common/Header/Header';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Profile.css';

function Profile({ onLogout, onUpdate }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [isInEditMode, setIsInEditMode] = React.useState(false);
  const [values, errors, isValid, handleChange] = useFilledForm(currentUser);

  const [isLoading, setIsLoading] = React.useState(false);
  const [requestError, setRequestError] = React.useState('');
  const [isSuccussMessageShown, setIsSuccussMessageShown] = React.useState(
    false,
  );

  function switchEditMode() {
    setIsInEditMode((state) => !state);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setRequestError('');
    setIsSuccussMessageShown(false);
    try {
      const res = await mainApi.updateUserInfo(values);
      onUpdate(res);
      switchEditMode();
      showSuccessMessage();
    } catch (err) {
      console.log(err);
      let message;
      switch (err.message) {
        case '409':
          message = REQUEST_ERRORS.UPDATE_409;
          break;
        case '500':
          message = REQUEST_ERRORS.SERVER_500;
          break;
        default:
          message = REQUEST_ERRORS.UPDATE_DEFAULT;
      }
      setRequestError(message);
    }
    setIsLoading(false);
  }

  function showSuccessMessage() {
    setIsSuccussMessageShown(true);
    setTimeout(() => setIsSuccussMessageShown(false), 2000);
  }

  return (
    <>
      <Header />
      <main className="profile content__stretched-element">
        <div className="profile__container">
          <h1 className="profile__title">{`Привет, ${
            currentUser?.name ?? PLACEHOLDERS.NAME
          }!`}</h1>
          <form className="profile__form" noValidate onSubmit={handleSubmit}>
            <label className="profile__input-container">
              <span className="profile__input-label">Имя</span>
              <input
                type="text"
                className={classNames('profile__input', {
                  profile__input_type_error: errors.name,
                })}
                name="name"
                minLength="2"
                maxLength="30"
                pattern="[A-Za-zА-Яа-яЁё\s-]+"
                required={true}
                placeholder={PLACEHOLDERS.NAME}
                value={values.name ?? ''}
                onChange={handleChange}
                disabled={isLoading}
                {...(!isInEditMode ? { disabled: true } : {})}
              />
              <span className="profile__input-error">{errors.name}</span>
            </label>
            <label className="profile__input-container">
              <span className="profile__input-label">E-mail</span>
              <input
                type="email"
                className={classNames('profile__input', {
                  profile__input_type_error: errors.email,
                })}
                name="email"
                required={true}
                placeholder={PLACEHOLDERS.EMAIL}
                value={values.email ?? ''}
                onChange={handleChange}
                disabled={isLoading}
                {...(!isInEditMode ? { disabled: true } : {})}
              />
              <span className="profile__input-error">{errors.email}</span>
            </label>
            <p className="profile__success-message">
              {isSuccussMessageShown && REQUEST_ERRORS.UPDATE_SUCCESSULLY}
            </p>

            {isInEditMode && (
              <>
                <p className="profile__error-message">{requestError}</p>
                <SubmitButton
                  title="Сохранить"
                  isDisabled={!isValid}
                  isLoading={isLoading}
                />
              </>
            )}
          </form>

          {!isInEditMode && (
            <ul className="profile__links">
              <li className="profile__links-item">
                <button className="profile__link" onClick={switchEditMode}>
                  Редактировать
                </button>
              </li>
              <li className="profile__links-item">
                <button
                  className="profile__link profile__link_type_logout"
                  onClick={onLogout}
                >
                  Выйти из аккаунта
                </button>
              </li>
            </ul>
          )}
        </div>
      </main>
    </>
  );
}

export default Profile;
