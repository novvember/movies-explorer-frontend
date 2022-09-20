import { NavLink } from 'react-router-dom';
import './AuthLinks.css';
import { NAV_TEXTS } from '../../../utils/config';

function AuthLinks() {
  return (
    <nav className="auth-links">
      <ul className="auth-links__list">
        <li className="auth-links__list-item">
          <NavLink to="/signup" className="auth-links__link">
            {NAV_TEXTS.REGISTER}
          </NavLink>
        </li>
        <li className="auth-links__list-item">
          <NavLink
            to="/signin"
            className="auth-links__link auth-links__link_type_login"
          >
            {NAV_TEXTS.LOGIN}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthLinks;
