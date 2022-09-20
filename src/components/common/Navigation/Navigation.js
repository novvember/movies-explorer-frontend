import classNames from 'classnames';
import React from 'react';
import { NAV_TEXTS } from '../../../utils/config';
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
    <div className={classNames('navigation', { navigation_themed: isThemed })}>
      <button
        type="button"
        className="navigation__open-button"
        aria-label={NAV_TEXTS.OPEN_MENU}
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
            aria-label={NAV_TEXTS.CLOSE_MENU}
            onClick={toggleMenu}
          ></button>

          <ul className="navigation__list">
            {hasLinkToMain && (
              <NavigationLink title={NAV_TEXTS.MAIN} to="/" isLinkToMain />
            )}
            <NavigationLink title={NAV_TEXTS.MOVIES} to="/movies" />
            <NavigationLink title={NAV_TEXTS.SAVED_MOVIES} to="/saved-movies" />
            <NavigationLink
              title={NAV_TEXTS.PROFILE}
              to="/profile"
              isLinkToProfile
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
