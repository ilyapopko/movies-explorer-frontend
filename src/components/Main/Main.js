import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const Main = () => (
  <>

    <Header type="default">
      <Navigation type="unauthorized">
        <Link to="/signup"
          className="navigation__link navigation__link_type_unauthorized"
          aria-label="Регистрация">Регистрация
        </Link>
        <Link to="/signin"
          className="navigation__link navigation__link_type_signin"
          aria-label="Вход в личный кабинет">Войти
        </Link>
      </Navigation>
    </Header>

    <Promo />
    <AboutProject />
    <Techs />
    <AboutMe>
      <Portfolio />
    </AboutMe>
    <Footer />
  </>
);

export default Main;
