import React from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import useForm from '../../../utils/hooks/useFormWithValidation';
import Header from '../../common/Header/Header';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Profile.css';

function Profile({ onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [values, errors, isValid, handleChange] = useForm();

  const [isInEditMode, setIsInEditMode] = React.useState(true);

  function switchEditMode(evt) {
    evt.preventDefault();
    setIsInEditMode((state) => !state);
  }

  return (
    <>
      <Header />
      <main className="profile content__stretched-element">
        <div className="profile__container">
          <h1 className="profile__title">{`Привет, ${
            currentUser?.name ?? 'Джон'
          }!`}</h1>
          <form className="profile__form">
            <label className="profile__input-container">
              <span className="profile__input-label">Имя</span>
              <input
                type="text"
                className="profile__input"
                name="name"
                minLength="2"
                maxLength="30"
                required={true}
                placeholder="Джон Макклейн"
                value={values.name ?? currentUser?.name ?? ''}
                onChange={handleChange}
                {...(!isInEditMode ? { disabled: true } : {})}
              />
            </label>
            <label className="profile__input-container">
              <span className="profile__input-label">E-mail</span>
              <input
                type="email"
                className="profile__input"
                name="email"
                required={true}
                placeholder="mcclane@nakatomi.corp"
                value={values.email ?? currentUser?.email ?? ''}
                onChange={handleChange}
                {...(!isInEditMode ? { disabled: true } : {})}
              />
            </label>

            {isInEditMode && (
              <>
                <p className="profile__error-message">
                  При обновлении профиля произошла ошибка.
                </p>
                <SubmitButton title="Сохранить" onClick={switchEditMode} />
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
