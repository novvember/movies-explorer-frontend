import './Header.css';
import logo from '../../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import React from 'react';
import AuthLinks from '../AuthLinks/AuthLinks';
import Navigation from '../Navigation/Navigation';

function Header({ isThemed = false }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header
      className={classNames('header', 'section', { header_themed: isThemed })}
    >
      <NavLink
        className="header__main-link"
        to="/"
        style={({ isActive }) => {
          return isActive ? { pointerEvents: 'none' } : {};
        }}
      >
        <img
          className="header__logo"
          alt="Логотип приложения: круг"
          src={logo}
        />
      </NavLink>
      {currentUser ? <Navigation isThemed={isThemed} /> : <AuthLinks />}
    </header>
  );
}

export default Header;
