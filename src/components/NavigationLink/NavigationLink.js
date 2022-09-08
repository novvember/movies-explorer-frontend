import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

function NavigationLink({ isLinkToMain = false, title, to, isLinkToProfile }) {
  return (
    <li
      className={classNames('navigation__list-item', {
        'navigation__list-item_type_main-page': isLinkToMain,
      })}
    >
      <NavLink
        className={({ isActive }) =>
          classNames(
            'navigation__link',
            { navigation__link_active: isActive },
            { navigation__link_type_account: isLinkToProfile },
          )
        }
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default NavigationLink;
