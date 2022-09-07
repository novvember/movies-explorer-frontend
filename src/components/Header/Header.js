import './Header.css';
import logo from '../../images/logo.svg';

function Header({ children, isThemed = false }) {
  return (
    <header className={`header section${isThemed ? ' header_themed' : ''}`}>
      <a className="header__main-link" href="#main">
        <img
          className="header__logo"
          alt="Логотип приложения: круг"
          src={logo}
        />
      </a>
      {children}
    </header>
  );
}

export default Header;
