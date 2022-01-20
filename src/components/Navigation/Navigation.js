import React from 'react';
import AuthNav from '../AuthNav/AuthNav';
import UnauthNav from '../UnauthNav/UnauthNav';
import './Navigation.css';

const Navigation = ({ type }) => (
  <>
    {type === "authorized" ? <AuthNav /> : <UnauthNav />}
  </>
);

export default Navigation;
