import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ children, type }) => (
    <header className={`header header_type_${type}`}>
      <Link to="/" className="header__logo" aria-label="Логотип"/>
      {children}

      {/* <header className="header header_type_authorized">
      <a href="/" className="header__logo" aria-label="Логотип"></a>
      <nav className="navigation navigation_type_authorized">
        <a href="/movies"
        className="navigation__link navigation__link_type_authorized navigation__link_active"
        aria-label="Фильмы">Фильмы</a>
        <a href="/saved-movies"
        className="navigation__link navigation__link_type_authorized"
        aria-label="Сохраненные фильмы">Сохраненные фильмы</a>
      </nav>
      <a href="/profile" className="navigation__link navigation__link_type_profile">Аккаунт
        <img src="./images/nav_icon.svg" alt="Значок аккаунта" className="navigation__icon" />
      </a>
      <button className="navigation__button"></button>
    </header> */}

    {/* <header className="header header_type_authorized">
      <a href="/" className="header__logo" aria-label="Логотип"></a>
      <nav className="navigation navigation_type_authorized">
        <a href="/movies"
          className="navigation__link navigation__link_type_authorized navigation__link_active"
          aria-label="Фильмы">Фильмы</a>
        <a href="/saved-movies" className="navigation__link navigation__link_type_authorized"
          aria-label="Сохраненные фильмы">Сохраненные фильмы</a>
      </nav>
      <a href="/profile" className="navigation__link navigation__link_type_profile">Аккаунт
        <img src="./images/nav_icon.svg" alt="Значок аккаунта" className="navigation__icon" />
      </a>
      <button className="navigation__button"></button>
    </header> */}

    </header>

);

export default Header;
