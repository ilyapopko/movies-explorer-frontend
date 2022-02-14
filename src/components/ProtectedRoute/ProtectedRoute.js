import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, path, children }) => {
  return (
    <Route path={path}>
      {
        isLoggedIn ? children : <Redirect to="/" />
      }
    </Route>

  )
};

export default ProtectedRoute;
