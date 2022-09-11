import AuthInput from '../AuthInput/AuthInput';

function AuthInputForPassword() {
  return (
    <AuthInput
      label="Пароль"
      params={{
        type: 'password',
        name: 'password',
        required: true,
        placeholder: 'akagi',
      }}
    />
  );
}

export default AuthInputForPassword;
