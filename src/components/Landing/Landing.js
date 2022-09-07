import Article from '../Article/Article';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';

function Landing() {
  return (
    <main>
      <Promo />
      <NavTab />
      <Article title="О&nbsp;проекте" navId="about-project">
        <div>Описание диплома</div>
      </Article>
      <Article title="Технологии" navId="techs" isThemed={true}>
        <div>7 технологий</div>
      </Article>
      <Article title="Студент" navId="about-me">
        <div>Описание</div>
        <div>Портфолио</div>
      </Article>
    </main>
  );
}

export default Landing;
