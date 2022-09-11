import './Auth.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import SubmitButton from '../SubmitButton/SubmitButton';
import AuthInputForName from '../AuthInputForName/AuthInputForName';
import AuthInputForEmail from '../AuthInputForEmail/AuthInputForEmail';
import AuthInputForPassword from '../AuthInputForPassword/AuthInputForPassword';

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
          <AuthInputForName />
          <AuthInputForEmail />
          <AuthInputForPassword />

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
