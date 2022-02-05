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
import { moviesApi } from "../../utils/MoviesApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { refactoringData, findMoviesByKeyword } from '../../utils/utils';
import './App.css';

function App() {

  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupNavOpen, setIsPopupNavOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState();
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [listFoundMovies, setListFoundMovies] = useState([]);
  const [listFoundSavedMovies, setListFoundSavedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

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

  useEffect(() => {
    if (isLoggedIn) {
      userApi.getMovies()
      .then((data) => {
        setSavedMovies(data);
        setListFoundSavedMovies(data);
      })
      .catch((err) => {
        showError(err);
      });
      const foundMovies = localStorage.getItem("foundMovies");
      if (foundMovies) {
        setListFoundMovies(JSON.parse(foundMovies));
      }
    }
  }, [isLoggedIn]);

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
        setInfoMessage({ message: "Вы успешно авторизовались!", fail: false });
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
        setListFoundMovies([]);
        setIsSearching(false);
        localStorage.clear();
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

  const handleFindMovie = async (textFilter, onlyShortFilms) => {

    setIsLoading(true);
    setIsSearching(true);
    setListFoundMovies([]);

    try {
      let allMovies = localStorage.getItem('cachedMovies');

      if (!allMovies) {
        allMovies = refactoringData(await moviesApi.getAllMovies());
        localStorage.setItem('cachedMovies', JSON.stringify(allMovies))
      } else {
        allMovies = JSON.parse(allMovies);
      }
      const foundMovies = findMoviesByKeyword(allMovies, textFilter, onlyShortFilms);
      setListFoundMovies(foundMovies);
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));

    } catch (err) {
      showError({
        ...err,
        message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      });
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleFindSavedMovie = (textFilter, onlyShortFilms) => {
    setIsSearching(true);
    setListFoundSavedMovies(findMoviesByKeyword(savedMovies, textFilter, onlyShortFilms));
  };

  const handleSaveMovie = (movie) => {
    userApi.saveMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        setListFoundSavedMovies([...savedMovies, data]);
      })
      .catch(showError);
  };

  const handleDeleteMovie = (saveId, movieId) => {
    userApi.deleteMovie(saveId)
      .then((data) => {
        setSavedMovies(savedMovies.filter(movie => movie.movieId !== movieId));
        setListFoundSavedMovies(listFoundSavedMovies.filter(movie => movie.movieId !== movieId));
      })
      .catch(showError);
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
                isLoading={isLoading}
                isSearching={isSearching}
                movies={listFoundMovies}
                savedMovies={savedMovies}
                onFindMovie={handleFindMovie}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                onBurgerClick={handleBurgerClick} />
            </ProtectedRoute>

            <ProtectedRoute isLoggedIn={isLoggedIn} path="/saved-movies">
              <SavedMovies
                movies={listFoundSavedMovies}
                savedMovies={savedMovies}
                isSearching={isSearching}
                onDeleteMovie={handleDeleteMovie}
                onFindMovie={handleFindSavedMovie}
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
