import { PLACEHOLDERS } from '../../../utils/config';
import AuthInput from '../AuthInput/AuthInput';

function AuthInputForPassword({ ...validationParams }) {
  return (
    <AuthInput
      label="Пароль"
      type="password"
      name="password"
      required={true}
      placeholder={PLACEHOLDERS.PASSWORD}
      {...validationParams}
    />
  );
}

export default AuthInputForPassword;
