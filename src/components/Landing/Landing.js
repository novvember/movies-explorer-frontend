import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Student from '../Student/Student';
import Techs from '../Techs/Techs';

function Landing() {
  return (
    <>
      <header>header</header>
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <Student />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
