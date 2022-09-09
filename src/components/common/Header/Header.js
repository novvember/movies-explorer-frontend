import './Header.css';
import logo from '../../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

function Header({ children, isThemed = false }) {
  return (
    <header
      className={classNames('header', 'section', { header_themed: isThemed })}
    >
      <NavLink
        className="header__main-link"
        to="/"
        style={({ isActive }) => {
          return isActive ? { 'pointer-events': 'none' } : {};
        }}
      >
        <img
          className="header__logo"
          alt="Логотип приложения: круг"
          src={logo}
        />
      </NavLink>
      {children}
    </header>
  );
}

export default Header;
