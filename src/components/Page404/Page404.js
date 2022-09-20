import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { PAGE_404 } from '../../utils/config';
import './Page404.css';

function Page404() {
  return (
    <main className={classNames('page404', 'section')}>
      <h1 className="page404__title">{PAGE_404.TITLE}</h1>
      <p className="page404__subtitle">{PAGE_404.SUBTITLE}</p>
      <Link className="page404__link" to={-1}>
        {PAGE_404.LINK}
      </Link>
    </main>
  );
}

export default Page404;
