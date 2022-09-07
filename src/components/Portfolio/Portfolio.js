import './Portfolio.css';

function Portfolio() {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href="https://novvember.github.io/lubimovka-landing/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Лендинг фестиваля &laquo;Любимовка&raquo;
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://github.com/RomanShigapov/ITMO/tree/develop"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Лендинг для лаборатории ИТМО
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://mesto.novvember.nomoredomains.sbs/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Приложение с&nbsp;фотографиями и&nbsp;лайками Mesto
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://novvember.github.io/yet-another-sorting-visualization"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Приложение с&nbsp;визуализацией алгоритмов сортировки Yet Another
            Sorting Visualization
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
