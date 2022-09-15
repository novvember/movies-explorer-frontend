import { Link } from 'react-router-dom';
import useForm from '../../../utils/hooks/useFormWithValidation';
import Auth from '../Auth/Auth';
import AuthInputForEmail from '../AuthInputForEmail/AuthInputForEmail';
import AuthInputForName from '../AuthInputForName/AuthInputForName';
import AuthInputForPassword from '../AuthInputForPassword/AuthInputForPassword';

function Register() {
  const TITLE = 'Добро пожаловать!';
  const HINT = (
    <p className="auth__hint">
      Уже зарегистрированы?{' '}
      <Link to="/signin" className="auth__hint-link">
        Войти
      </Link>
    </p>
  );
  const BUTTON_TEXT = 'Зарегистрироваться';

  const [values, errors, isValid, handleChange] = useForm();

  return (
    <Auth title={TITLE} hint={HINT} buttonText={BUTTON_TEXT} isValid={isValid}>
      <AuthInputForName
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
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

export default Register;
