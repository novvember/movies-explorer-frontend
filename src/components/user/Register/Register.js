import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../utils/hooks/useFormWithValidation';
import Auth from '../Auth/Auth';
import AuthInputForEmail from '../AuthInputForEmail/AuthInputForEmail';
import AuthInputForName from '../AuthInputForName/AuthInputForName';
import AuthInputForPassword from '../AuthInputForPassword/AuthInputForPassword';
import mainApi from '../../../utils/MainApi';

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

  const [requestError, setRequestError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setRequestError('');
    try {
      const res = await mainApi.register(values);
      // console.log(res);
    } catch (err) {
      setRequestError(err.message);
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
      <AuthInputForName
        value={values.name ?? ''}
        error={errors.name}
        onChange={handleChange}
        isDisabled={isLoading}
      />
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

export default Register;
