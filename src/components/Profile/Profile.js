import React from 'react';
import './Profile.css';

function Profile() {
  const [isInEditMode, setIsInEditMode] = React.useState(true);

  function switchEditMode(evt) {
    evt.preventDefault();
    setIsInEditMode((state) => !state);
  }

  return (
    <main className="profile content__stretched-element">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__inputs">
          <label className="profile__input-container">
            <span className="profile__input-label">Имя</span>
            <input
              type="text"
              className="profile__input"
              name="name"
              {...(!isInEditMode ? { disabled: true } : {})}
            />
          </label>
          <label className="profile__input-container">
            <span className="profile__input-label">E-mail</span>
            <input
              type="text"
              className="profile__input"
              name="email"
              {...(!isInEditMode ? { disabled: true } : {})}
            />
          </label>
        </div>

        {isInEditMode && (
          <div className="profile__buttons">
            <p className="profile__error-message">
              При обновлении профиля произошла ошибка.
            </p>
            <button
              className="input__submit-button"
              onClick={switchEditMode}
              type="submit"
            >
              Сохранить
            </button>
          </div>
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
    </main>
  );
}

export default Profile;
