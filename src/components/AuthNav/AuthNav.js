import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import iconAccount from '../../images/nav_icon.svg';
import '../Navigation/Navigation.css';

const AuthNav = ({onBurgerClick}) => {
  return (
    <>
      <nav className="navigation navigation_type_authorized">
        <NavLink to="/movies" activeClassName="navigation__link_active"
          className="navigation__link navigation__link_type_authorized"
          aria-label="Все фильмы">Фильмы
        </NavLink>
        <NavLink to="/saved-movies" activeClassName="navigation__link_active"
          className="navigation__link navigation__link_type_authorized"
          aria-label="Фильмы, сохраненные пользователем">Сохраненные фильмы
        </NavLink>
      </nav>
      <Link to="/profile"
          className="header__link"
          aria-label="Профиль пользователя">Аккаунт
        <img src={iconAccount} alt="Значок аккаунта" className="header__icon" />
        </Link>
      <button className="header__button" onClick={onBurgerClick}></button>
    </>
  );
};

export default AuthNav;