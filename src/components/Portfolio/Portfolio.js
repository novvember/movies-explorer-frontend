import './Portfolio.css';

function Portfolio() {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a href="#" className="portfolio__link" target="_blank">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a href="#" className="portfolio__link" target="_blank">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a href="#" className="portfolio__link" target="_blank">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
