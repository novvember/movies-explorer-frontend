import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab section" aria-label="Навигация по странице">
      <nav>
        <ul className="navtab__list">
          <li>
            <a href="#about-project" className="navtab__link">
              О&nbsp;проекте
            </a>
          </li>
          <li>
            <a href="#techs" className="navtab__link">
              Технологии
            </a>
          </li>
          <li>
            <a href="#about-me" className="navtab__link">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
