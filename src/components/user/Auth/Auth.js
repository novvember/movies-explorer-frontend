import './Auth.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import SubmitButton from '../SubmitButton/SubmitButton';

function Auth({ mode = 'register' }) {
  const MODES = {
    register: {
      title: 'Добро пожаловать!',
      hint: (
        <p className="auth__hint">
          Уже зарегистрированы?{' '}
          <Link to="/signin" className="auth__hint-link">
            Войти
          </Link>
        </p>
      ),
    },
    login: {
      title: 'Рады видеть!',
      hint: (
        <p className="auth__hint">
          Ещё не зарегистрированы?{' '}
          <Link to="/signup" className="auth__hint-link">
            Регистрация
          </Link>
        </p>
      ),
    },
  };

  return (
    <main className="auth content__stretched-element">
      <div className="auth__container">
        <Link className="auth__logo-link" to="/">
          <img
            className="header__logo"
            alt="Логотип приложения: круг"
            src={logo}
          />
        </Link>
        <h1 className="auth__title">{MODES[mode].title}</h1>
        <form className="auth__form">
          <label className="auth__input-container">
            <span className="auth__label">Имя</span>
            <input type="text" className="auth__input" name="name" required />
          </label>
          <label className="auth__input-container">
            <span className="auth__label">E-mail</span>
            <input type="email" className="auth__input" name="email" required />
          </label>
          <label className="auth__input-container">
            <span className="auth__label">Пароль</span>
            <input
              type="password"
              className="auth__input"
              name="password"
              required
            />
          </label>
          <p className="auth__error">Что-то пошло не так...</p>
          <SubmitButton
            title="Зарегистрироваться"
            className="auth__submit-button"
          />
        </form>
        {MODES[mode].hint}
      </div>
    </main>
  );
}

export default Auth;
