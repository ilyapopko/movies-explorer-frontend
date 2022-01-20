import React from 'react';
import { NavLink } from 'react-router-dom';
import './PopupNav.css';

const PopupNav = () => (
  <section className="popup">
    <div className="popup__container">
      <button className="popup__close"></button>
      <nav className="popup__navigation">
        <NavLink to="/" activeClassName="popup__navigation-link_active"
          className="navigation__link popup__navigation-link"
          aria-label="Главная страница">Главная
        </NavLink>
        <NavLink to="/movies" activeClassName="popup__navigation-link_active"
          className="navigation__link popup__navigation-link"
          aria-label="Фильмы">Фильмы
        </NavLink>
        <NavLink to="/saved-movies" activeClassName="popup__navigation-link_active"
          className="navigation__link popup__navigation-link"
          aria-label="Сохраненные фильмы">Сохраненные фильмы
        </NavLink>
        <NavLink to="/profile"
          className="navigation__link popup__navigation-link
          navigation__link_type_profile popup__navigation__link_type_profile"
          aria-label="Страница профиля">Аккаунт
          <img src="./images/nav_icon.svg" alt="Значок аккаунта" className="navigation__icon" />
        </NavLink>
      </nav>
    </div>
  </section>
);

export default PopupNav;
