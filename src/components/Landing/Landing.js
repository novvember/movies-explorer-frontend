import AboutProject from '../AboutProject/AboutProject';
import AuthLinks from '../AuthLinks/AuthLinks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Student from '../Student/Student';
import Techs from '../Techs/Techs';

function Landing() {
  return (
    <>
      <Header isThemed={true}>
        <AuthLinks />
      </Header>
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