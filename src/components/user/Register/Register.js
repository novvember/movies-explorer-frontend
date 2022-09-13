import Auth from '../Auth/Auth';
import AuthInputForEmail from '../AuthInputForEmail/AuthInputForEmail';
import AuthInputForName from '../AuthInputForName/AuthInputForName';
import AuthInputForPassword from '../AuthInputForPassword/AuthInputForPassword';

function Register() {
  return (
    <Auth mode="register">
      <AuthInputForName />
      <AuthInputForEmail />
      <AuthInputForPassword />
    </Auth>
  );
}

export default Register;
