import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Main = ({ isLoggedIn, onBurgerClick }) => (
  <>
    <Header type="main">
      <Navigation
        type={!isLoggedIn ? "unauthorized" : "authorized"}
        onBurgerClick={onBurgerClick} />
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
