import React from 'react';
import './Navigation.css';

const Navigation = ({ children, type }) => (
    <nav className={`navigation navigation_type_${type}`}>
      {children}
    </nav>
);

export default Navigation;
