import classNames from 'classnames';
import React from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import { REQUEST_ERRORS } from '../../../utils/config';
import useForm from '../../../utils/hooks/useFormWithValidation';
import mainApi from '../../../utils/MainApi';
import Header from '../../common/Header/Header';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Profile.css';

function Profile({ onLogout, onUpdate }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isInEditMode, setIsInEditMode] = React.useState(false);
  const [values, errors, isValid, handleChange] = useForm(currentUser);
  const [requestError, setRequestError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const [areSameValues, setAreSameValues] = React.useState(true);

  function switchEditMode() {
    setIsInEditMode((state) => !state);
  }

  React.useEffect(() => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setAreSameValues(true);
      return;
    }
    setAreSameValues(false);
  }, [values, currentUser]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setRequestError('');
    try {
      const res = await mainApi.updateUserInfo(values);
      onUpdate(res);
      switchEditMode();
    } catch (err) {
      console.log(err);
      let message;
      switch (err.message) {
        case '409':
          message = REQUEST_ERRORS.UPDATE_409;
          break;
        default:
          message = REQUEST_ERRORS.UPDATE_DEFAULT;
      }
      setRequestError(message);
    }
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      <main className="profile content__stretched-element">
        <div className="profile__container">
          <h1 className="profile__title">{`Привет, ${
            currentUser?.name ?? 'Джон'
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
                required={true}
                placeholder="Джон Макклейн"
                value={values.name ?? ''}
                onChange={handleChange}
                {...(!isInEditMode ? { disabled: true } : {})}
              />
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
                placeholder="mcclane@nakatomi.corp"
                value={values.email ?? ''}
                onChange={handleChange}
                {...(!isInEditMode ? { disabled: true } : {})}
              />
            </label>

            {isInEditMode && (
              <>
                <p className="profile__error-message">{requestError}</p>
                <SubmitButton
                  title="Сохранить"
                  isDisabled={!isValid || areSameValues}
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
