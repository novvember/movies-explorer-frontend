import './Auth.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import SubmitButton from '../SubmitButton/SubmitButton';

function Auth({ title, hint, buttonText, children, isValid, requestError }) {
  return (
    <main className="auth content__stretched-element">
      <div className="auth__container">
        <Link className="auth__logo-link" to="/">
          <img
            className="header__logo"
            alt="Логотип приложения: круг"
            src={logo}
          />
        </Link>
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form" noValidate>
          {children}
          <p className="auth__request-error">{requestError}</p>
          <SubmitButton
            title={buttonText}
            className="auth__submit-button"
            isDisabled={!isValid}
          />
        </form>
        {hint}
      </div>
    </main>
  );
}

export default Auth;
