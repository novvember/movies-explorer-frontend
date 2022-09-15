import { Link } from 'react-router-dom';
import useForm from '../../../utils/hooks/useFormWithValidation';
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

  const [values, errors, isValid, handleChange] = useForm();

  return (
    <Auth title={TITLE} hint={HINT} buttonText={BUTTON_TEXT} isValid={isValid}>
      <AuthInputForEmail
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />
      <AuthInputForPassword
        value={values.password}
        error={errors.password}
        onChange={handleChange}
      />
    </Auth>
  );
}

export default Login;
