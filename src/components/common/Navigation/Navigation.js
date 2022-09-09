import classNames from 'classnames';
import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import './Navigation.css';

function Navigation({ hasLinkToMain = true, isThemed = false }) {
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
    <div className={classNames('navigation', {navigation_themed: isThemed})}>
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
              <NavigationLink title="Главная" to="/" isLinkToMain />
            )}
            <NavigationLink title="Фильмы" to="/movies" />
            <NavigationLink title="Сохранённые фильмы" to="/saved-movies" />
            <NavigationLink title="Аккаунт" to="/profile" isLinkToProfile />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
