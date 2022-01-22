import React from 'react';
import { NavLink } from 'react-router-dom';
import iconAccount from '../../images/nav_icon.svg';
import './PopupNav.css';

const PopupNav = ({ isOpen, onClose}) => (
  <section className={`popup-nav ${isOpen ? "popup-nav_opened" : ""}`}>
    <div className="popup-nav__container">
      <button className="popup-nav__close" onClick={onClose}></button>
      <nav className="popup-nav__navigation">
        <NavLink to="/" exact={true} activeClassName="popup-nav__navigation-link_active"
          className="popup-nav__navigation-link"
          aria-label="Главная страница"
          onClick={onClose}>Главная
        </NavLink>
        <NavLink to="/movies" activeClassName="popup-nav__navigation-link_active"
          className="popup-nav__navigation-link"
          aria-label="Фильмы"
          onClick={onClose}>Фильмы
        </NavLink>
        <NavLink to="/saved-movies" activeClassName="popup-nav__navigation-link_active"
          className="popup-nav__navigation-link"
          aria-label="Сохраненные фильмы"
          onClick={onClose}>Сохраненные фильмы
        </NavLink>
        <NavLink to="/profile"
          className="popup-nav__navigation-link popup-nav__navigation-link_type_profile"
          aria-label="Страница профиля"
          onClick={onClose}>Аккаунт
          <img src={iconAccount} alt="Значок аккаунта" className="popup-nav__navigation-icon" />
        </NavLink>
      </nav>
    </div>
  </section>
);

export default PopupNav;
