import React from 'react';
import AuthNav from '../AuthNav/AuthNav';
import UnauthNav from '../UnauthNav/UnauthNav';
import './Navigation.css';

const Navigation = ({ type, onBurgerClick }) => (
  <>
    {type === "authorized" ? (
      <AuthNav
        onBurgerClick={onBurgerClick} />
    ) : <UnauthNav />}
  </>
);

export default Navigation;
