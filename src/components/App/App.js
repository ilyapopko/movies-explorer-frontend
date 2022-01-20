import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <h1>Movie explorer</h1>
    // </div>

    <>
      <Switch>

        <Route exact path="/">
          <Main></Main>
        </Route>


      </Switch>
    </>
  );
}

export default App;
