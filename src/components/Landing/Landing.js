import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Student from '../Student/Student';
import Techs from '../Techs/Techs';

function Landing() {
  return (
    <>
      <Header isThemed={true}>
        <Navigation />
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
