import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Page404.css';

function Page404() {
  return (
    <main className={classNames('page404', 'section')}>
      <h1 className="page404__title">404</h1>
      <p className="page404__subtitle">Страница не найдена</p>
      <Link className="page404__link" to={-1}>
        Назад
      </Link>
    </main>
  );
}

export default Page404;
