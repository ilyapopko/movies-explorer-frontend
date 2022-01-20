import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ children, type }) => (
    <header className={`header header_type_${type}`}>
      <Link to="/" className="header__logo" aria-label="Логотип"/>
      {children}
    </header>
);

export default Header;
