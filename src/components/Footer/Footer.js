import './Footer.css';

function Footer() {
  return (
    <footer className="footer section">
      <p className="footer__text">
        Учебный проект Яндекс.Практикума &times; BeatFilm.
      </p>
      <nav className="footer__links">
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <a href="https://practicum.yandex.ru/" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a href="https://github.com/novvember/movies-explorer-frontend" className="footer__link">
              Github
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">&copy;&nbsp;2022</p>
    </footer>
  );
}

export default Footer;
