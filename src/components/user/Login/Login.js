import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';
import AuthInputForEmail from '../AuthInputForEmail/AuthInputForEmail';
import AuthInputForPassword from '../AuthInputForPassword/AuthInputForPassword';

function Login() {
  const TITLE = 'Рады видеть!';
  const HINT = (
    <p className="auth__hint">
      Ещё не зарегистрированы?{' '}
      <Link to="/signup" className="auth__hint-link">
        Регистрация
      </Link>
    </p>
  );
  const BUTTON_TEXT = 'Войти';

  return (
    <Auth mode="register" title={TITLE} hint={HINT} buttonText={BUTTON_TEXT}>
      <AuthInputForEmail />
      <AuthInputForPassword />
    </Auth>
  );
}

export default Login;
