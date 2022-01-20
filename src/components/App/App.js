import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupNavOpen, setIsPopupNavOpen] = useState(false);

  const history = useHistory();

  const handleRegister = () => {
    //Этап 4
  };

  const handleLogin = () => {
    //этап 3 временно для включения признака isLoggedIn
    setIsLoggedIn(true);
    history.push('/');
    //этап 4
  };

  const handleLogout = (evt) => {
    //этап 3 временно для включения признака isLoggedIn
    evt.preventDefault();
    setIsLoggedIn(false);
    history.push('/');
    //этап 4
  };
  const handleSaveProfile = (evt) => {
    evt.preventDefault();
    //этап 4
  };

  const handleFindMovie = (evt) => {
    evt.preventDefault();
    //этап 4
  };

  const handleSaveCard = () => {
    //этап 4
  };

  const handleDeleteCard = () => {
    //этап 4
  };

  const handleBurgerClick = () => {
    setIsPopupNavOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupNavOpen(false);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main isLoggedIn={isLoggedIn} onBurgerClick={handleBurgerClick} />
        </Route>
        <Route path="/signin">
          <Login onSubmit={handleLogin} />
        </Route>
        <Route path="/signup">
          <Register onSubmit={handleRegister} />
        </Route>
        <Route path="/movies">
          <Movies
            onFindMovie={handleFindMovie}
            onSaveCard={handleSaveCard}
            onDeleteCard={handleDeleteCard}
            onBurgerClick={handleBurgerClick} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            onFindMovie={handleFindMovie}
            onBurgerClick={handleBurgerClick} />
        </Route>
        <Route path="/profile">
          <Profile onSubmit={handleSaveProfile} onBurgerClick={handleBurgerClick} onLogout={handleLogout} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <PopupNav
        isOpen={isPopupNavOpen}
        onClose={handlePopupClose} />
    </>
  );
}

export default App;
