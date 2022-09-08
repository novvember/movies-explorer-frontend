import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ hasLinkToMain = true }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((state) => !state);
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) toggleMenu();
  }

  function handleEscClose(event) {
    if (event.key === 'Escape') {
      toggleMenu();
    }
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });

  return (
    <div className="navigation">
      <button
        type="button"
        className="navigation__open-button"
        aria-label="Открыть меню"
        onClick={toggleMenu}
      ></button>

      <div
        className={`navigation__menu${
          isOpen ? ' navigation__menu_opened' : ''
        }`}
        onClick={handleOverlayClick}
      >
        <nav className="navigation__panel">
          <button
            type="button"
            className="navigation__close-button"
            aria-label="Закрыть меню"
            onClick={toggleMenu}
          ></button>

          <ul className="navigation__list">
            {hasLinkToMain && (
              <li className="navigation__list-item navigation__list-item_type_main-page">
                <NavLink
                  className={({ isActive }) =>
                    `navigation__link${
                      isActive ? ' navigation__link_active' : ''
                    }`
                  }
                  to="/"
                >
                  Главная
                </NavLink>
              </li>
            )}

            <li className="navigation__list-item">
              <NavLink
                className={({isActive}) => `navigation__link${isActive ? ' navigation__link_active' : ''}`}
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>

            <li className="navigation__list-item">
              <NavLink className={({isActive}) => `navigation__link${isActive ? ' navigation__link_active' : ''}`} to="/saved-movies">
                Сохранённые фильмы
              </NavLink>
            </li>

            <li className="navigation__list-item">
              <NavLink
                className={({isActive}) => `navigation__link${isActive ? ' navigation__link_active' : ''}`}
                to="/profile"
              >
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
