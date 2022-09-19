import React from 'react';
import { Link } from 'react-router-dom';
import { REQUEST_ERRORS } from '../../../utils/config';
import useForm from '../../../utils/hooks/useForm';
import mainApi from '../../../utils/MainApi';
import Auth from '../Auth/Auth';
import AuthInputForEmail from '../AuthInputForEmail/AuthInputForEmail';
import AuthInputForPassword from '../AuthInputForPassword/AuthInputForPassword';

function Login({ onLogin }) {
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

  const [requestError, setRequestError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setRequestError('');

    try {
      const res = await mainApi.login(values);
      if (res.token) {
        onLogin(res);
      }
    } catch (err) {
      let message;
      switch (err.message) {
        case '401':
          message = REQUEST_ERRORS.SIGNIN_401;
          break;
        default:
          message = REQUEST_ERRORS.SIGNIN_DEFAULT;
      }
      setRequestError(message);
    }

    setIsLoading(false);
  }

  return (
    <Auth
      title={TITLE}
      hint={HINT}
      buttonText={BUTTON_TEXT}
      isValid={isValid}
      requestError={requestError}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <AuthInputForEmail
        value={values.email ?? ''}
        error={errors.email}
        onChange={handleChange}
        isDisabled={isLoading}
      />
      <AuthInputForPassword
        value={values.password ?? ''}
        error={errors.password}
        onChange={handleChange}
        isDisabled={isLoading}
      />
    </Auth>
  );
}

export default Login;
