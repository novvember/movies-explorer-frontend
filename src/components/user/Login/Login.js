import Auth from '../Auth/Auth';
import AuthInputForEmail from '../AuthInputForEmail/AuthInputForEmail';
import AuthInputForPassword from '../AuthInputForPassword/AuthInputForPassword';

function Login() {
  return (
    <Auth mode="login">
      <AuthInputForEmail />
      <AuthInputForPassword />
    </Auth>
  );
}

export default Login;
