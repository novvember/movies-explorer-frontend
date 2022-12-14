import AboutProject from '../AboutProject/AboutProject';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Student from '../Student/Student';
import Techs from '../../landing/Techs/Techs';

function Landing() {
  return (
    <>
      <Header isThemed={true} />
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
