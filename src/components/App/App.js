// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PopupNav from '../PopupNav/PopupNav';
import './App.css';

function App() {
  const handleLogin = () => {

  };

  return (
    <>
      <Switch>

        <Route exact path="/">
          <Main/>
        </Route>

        <Route path="/signin">
          <Login onLogin={handleLogin}/>
        </Route>

        <Route path="/signup">
          <Register/>
        </Route>

        <Route path="/movies">
          <Movies/>
        </Route>

        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>

        <Route path="/profile">
          <Profile/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>

      </Switch>

      <PopupNav/>
    </>
  );
}

export default App;
