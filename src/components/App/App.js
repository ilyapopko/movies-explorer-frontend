import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PopupNav from '../PopupNav/PopupNav';
import PopupInfo from '../PopupInfo/PopupInfo';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { userApi } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import './App.css';

function App() {

  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupNavOpen, setIsPopupNavOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState();
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });

  const history = useHistory();


  useEffect(() => {
    setIsAuthChecking(true);
    userApi.getUserProperties()
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        showError(err);
      })
      .finally(() => setIsAuthChecking(false));
  }, []);


  const showError = (err) => {
    console.log(err);
    setInfoMessage({
      message: `Что-то пошло не так! ${err.status} ${err.message}`,
      fail: true
    });
  }
  const handleRegister = ({ name, email, password }) => {
    userApi.register({ name, email, password })
      .then(() => {
        history.push('/signin');
        setInfoMessage({ message: "Вы успешно зарегистрировались!", fail: false });
      })
      .catch(showError);
  };
  const handleLogin = ({ email, password }) => {
    userApi.authorize({ email, password })
      .then((data) => {
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        history.push('/');
        setInfoMessage({ message: "Вы успешно авторизировались!", fail: false });
      })
      .catch(showError);
  };

  const handleLogout = () => {
    userApi.logout()
      .then((data) => {
        setInfoMessage({ message: data.message, fail: false })
      })
      .catch(showError)
      .finally(() => {
        setCurrentUser({ name: "", email: "" });
        setIsLoggedIn(false);
        history.push('/');
      });
  };

  const handleUpdateProfile = ({ name, email }) => {
    userApi.updateUser({ name, email })
      .then((data) => {
        setCurrentUser(data);
        history.push('/');
        setInfoMessage({ message: "Профиль обновлен!", fail: false });
      })
      .catch(showError);
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

  const handlePopupNavClose = () => {
    setIsPopupNavOpen(false);
  };

  const handlePopupInfoClose = () => {
    setInfoMessage();
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        {!isAuthChecking &&
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

            <ProtectedRoute isLoggedIn={isLoggedIn} path="/movies">
              <Movies
                onFindMovie={handleFindMovie}
                onSaveCard={handleSaveCard}
                onDeleteCard={handleDeleteCard}
                onBurgerClick={handleBurgerClick} />
            </ProtectedRoute>

            <ProtectedRoute isLoggedIn={isLoggedIn} path="/saved-movies">
              <SavedMovies
                onFindMovie={handleFindMovie}
                onBurgerClick={handleBurgerClick} />
            </ProtectedRoute>

            <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
              <Profile onSubmit={handleUpdateProfile} onBurgerClick={handleBurgerClick} onLogout={handleLogout} />
            </ProtectedRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        }
        <PopupNav
          isOpen={isPopupNavOpen}
          onClose={handlePopupNavClose} />
        <PopupInfo
          isOpen={!!infoMessage}
          message={infoMessage}
          onClose={handlePopupInfoClose} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
