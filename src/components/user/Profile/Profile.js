import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Profile.css';

function Profile() {
  const [isInEditMode, setIsInEditMode] = React.useState(true);

  function switchEditMode(evt) {
    evt.preventDefault();
    setIsInEditMode((state) => !state);
  }

  return (
    <main className="profile content__stretched-element">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Джон!</h1>
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
              <button className="profile__link profile__link_type_logout">
                Выйти из аккаунта
              </button>
            </li>
          </ul>
        )}
      </div>
    </main>
  );
}

export default Profile;
