import AuthInput from '../AuthInput/AuthInput';

function AuthInputForEmail({ ...validationParams }) {
  return (
    <AuthInput
      label="E-mail"
      type="email"
      name="email"
      required={true}
      placeholder="mcclane@nakatomi.corp"
      {...validationParams}
    />
  );
}

export default AuthInputForEmail;
