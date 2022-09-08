import './AuthLinks.css';

function AuthLinks() {
  return (
    <nav className="auth-links">
      <ul className="auth-links__list">
        <li className="auth-links__list-item">
          <a href="#test" className="auth-links__link">
            Регистрация
          </a>
        </li>
        <li className="auth-links__list-item">
          <a
            href="#test"
            className="auth-links__link auth-links__link_type_login"
          >
            Войти
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default AuthLinks;
