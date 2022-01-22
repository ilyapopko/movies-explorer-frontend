import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

const Promo = () => (
  <section className="promo">
    <div className="promo__logo-container">
      <div className="promo__logo"></div>
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки
      </h1>
    </div>
    <NavTab />
  </section>
);

export default Promo;
