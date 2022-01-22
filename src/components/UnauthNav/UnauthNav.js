import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation/Navigation.css';

const UnauthNav = () => {
  return (
    <nav className="navigation">
      <Link to="/signup"
        className="navigation__link navigation__link_type_unauthorized"
        aria-label="Создать учетную запись">Регистрация
      </Link>

      <Link to="/signin"
        className="navigation__link navigation__link_type_signin"
        aria-label="Вход в личный кабинет">Войти
      </Link>
    </nav>
  );
};

export default UnauthNav;