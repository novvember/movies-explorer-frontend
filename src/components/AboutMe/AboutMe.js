import './AboutMe.css';
import photo from '../../images/student-photo.jpg';

function AboutMe() {
  return (
    <article className="about-me">
      <img src={photo} alt="Фотография Дмитрия" className="about-me__photo" />
      <div className="about-me__description">
        <p className="about-me__name">Дмитрий</p>
        <p className="about-me__subtitle">Фронтенд-разработчик, 34&nbsp;года</p>
        <p className="about-me__text">
          Нравится продумывать логику, структуру, а&nbsp;потом реализовывать
          понятные для пользователей интерфейсы, а&nbsp;также учитывать
          требования стандартов по&nbsp;семантике и&nbsp;доступности. Хочу
          продолжать изучать и&nbsp;использовать современные веб-технологии,
          приемы и&nbsp;софт и&nbsp;развиваться в&nbsp;этом направлении.
        </p>
        <p className="about-me__text">
          Стараюсь постоянно изучать новое: делаю дополнительные проекты
          на&nbsp;курсах, помогаю на&nbsp;Stackoverflow, решаю задачки
          на&nbsp;Codewars. Читаю дополнительные источники, мои любимые:
          learn.javascript.ru (куда без него), регулярные новости фронтенда
          на&nbsp;Хабре от&nbsp;HTML&nbsp;Academy, классные статьи от&nbsp;CSS
          Tricks или Josh Comeau.
        </p>
        <ul className="about-me__link-list">
          <li className="about-me__link-list-item">
            <a href="https://github.com/novvember" className="about-me__link">
              Github
            </a>
          </li>
          <li className="about-me__link-list-item">
            <a
              href="https://ru.stackoverflow.com/users/352251"
              className="about-me__link"
            >
              Stackoverflow
            </a>
          </li>
          <li className="about-me__link-list-item">
            <a
              href="https://www.codewars.com/users/novvember"
              className="about-me__link"
            >
              Codewars
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default AboutMe;
