import AuthInput from '../AuthInput/AuthInput';

function AuthInputForName({ ...validationParams }) {
  return (
    <AuthInput
      label="Имя"
      type="text"
      name="name"
      required={true}
      minLength="2"
      maxLength="30"
      placeholder="Джон Макклейн"
      {...validationParams}
    />
  );
}

export default AuthInputForName;
