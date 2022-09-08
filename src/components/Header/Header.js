import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ children, isThemed = false }) {
  return (
    <header className={`header section${isThemed ? ' header_themed' : ''}`}>
      <Link className="header__main-link" to="/">
        <img
          className="header__logo"
          alt="Логотип приложения: круг"
          src={logo}
        />
      </Link>
      {children}
    </header>
  );
}

export default Header;
