import AuthInput from '../AuthInput/AuthInput';

function AuthInputForPassword({ ...validationParams }) {
  return (
    <AuthInput
      label="Пароль"
      type="password"
      name="password"
      required={true}
      placeholder="akagi"
      {...validationParams}
    />
  );
}

export default AuthInputForPassword;
