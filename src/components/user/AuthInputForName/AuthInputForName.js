import { PLACEHOLDERS } from '../../../utils/config';
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
      pattern="[A-Za-zА-Яа-яЁё\s-]+"
      placeholder={PLACEHOLDERS.NAME}
      {...validationParams}
    />
  );
}

export default AuthInputForName;
