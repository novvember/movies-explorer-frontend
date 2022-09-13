import './Techs.css';
import Article from '../Article/Article';

function Techs() {
  return (
    <Article title="Технологии" navId="techs" isThemed={true}>
      <article className="techs">
        <p className="techs__title">7&nbsp;технологий</p>
        <p className="techs__subtitle">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>
      </article>
    </Article>
  );
}

export default Techs;
