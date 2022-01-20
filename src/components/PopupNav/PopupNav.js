import React from 'react';
import { NavLink } from 'react-router-dom';
import iconAccount from '../../images/nav_icon.svg';
import './PopupNav.css';

const PopupNav = ({ isOpen, onClose}) => (
  <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
    <div className="popup__container">
      <button className="popup__close" onClick={onClose}></button>
      <nav className="popup__navigation">
        <NavLink to="/" exact={true} activeClassName="popup__navigation-link_active"
          className="navigation__link popup__navigation-link"
          aria-label="Главная страница"
          onClick={onClose}>Главная
        </NavLink>
        <NavLink to="/movies" activeClassName="popup__navigation-link_active"
          className="navigation__link popup__navigation-link"
          aria-label="Фильмы"
          onClick={onClose}>Фильмы
        </NavLink>
        <NavLink to="/saved-movies" activeClassName="popup__navigation-link_active"
          className="navigation__link popup__navigation-link"
          aria-label="Сохраненные фильмы"
          onClick={onClose}>Сохраненные фильмы
        </NavLink>
        <NavLink to="/profile"
          className="navigation__link popup__navigation-link
          navigation__link_type_profile popup__navigation__link_type_profile"
          aria-label="Страница профиля"
          onClick={onClose}>Аккаунт
          <img src={iconAccount} alt="Значок аккаунта" className="navigation__icon" />
        </NavLink>
      </nav>
    </div>
  </section>
);

export default PopupNav;
