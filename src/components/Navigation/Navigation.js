import React from 'react';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((state) => !state);
  }

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
      >
        <nav className="navigation__panel">
          <button
            type="button"
            className="navigation__close-button"
            aria-label="Закрыть меню"
            onClick={toggleMenu}
          ></button>

          <ul className="navigation__list">
            <li className="navigation__list-item">
              <a className="navigation__link" href="#test">
                Главная
              </a>
            </li>
            <li className="navigation__list-item">
              <a
                className="navigation__link navigation__link_active"
                href="#test"
              >
                Фильмы
              </a>
            </li>
            <li className="navigation__list-item">
              <a className="navigation__link" href="#test">
                Сохранённые фильмы
              </a>
            </li>
            <li className="navigation__list-item">
              <a
                className="navigation__link navigation__link_type_account"
                href="#test"
              >
                Аккаунт
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
