import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
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
  const [onlyShortFilms, setOnlyShortFilms] = useState(false);
  const [savedFilter, setSavedFilter] = useState('');
  const [onlyShortSavedFilms, setOnlyShortSavedFilms] = useState(false);
  const [savedFilterSavedFilms, setSavedFilterSavedFilms] = useState('');

  const history = useHistory();

  useEffect(() => {
    userApi.getUserProperties()
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        if (err.status !== 401) {
          showError(err);
        }
      })
      .finally(() => {
        setIsAuthChecking(false);
      });
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
      const shortFilms = localStorage.getItem("shortFilms");
      if (shortFilms !== undefined) {
        setOnlyShortFilms(JSON.parse(shortFilms));
      }
      setSavedFilter(localStorage.getItem("savedFilter"));

      const shortSavedFilms = localStorage.getItem("shortSavedFilms");
      if (shortSavedFilms !== undefined) {
        setOnlyShortSavedFilms(JSON.parse(shortSavedFilms));
      }
      setSavedFilterSavedFilms(localStorage.getItem("savedFilterSavedFilms"));

    }
  }, [isLoggedIn]);

  const showError = (err) => {
    setInfoMessage({
      message: `Что-то пошло не так! ${err.status} ${err.message}`,
      fail: true
    });
  }
  const handleRegister = ({ name, email, password }) => {
    userApi.register({ name, email, password })
      .then(() => {
        handleLogin({ email, password }, "Вы успешно зарегистрировались!");
      })
      .catch(showError);
  };
  const handleLogin = ({ email, password }, message) => {
    userApi.authorize({ email, password })
      .then((data) => {
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        history.push('/movies');
        setInfoMessage({ message: !message ? "Вы успешно авторизовались!" : message, fail: false });
      })
      .catch(showError);
  };

  const handleLogout = () => {
    userApi.logout()
      .then((data) => {
        setIsLoggedIn(false);
        setCurrentUser({ name: "", email: "" });
        setListFoundMovies([]);
        setIsSearching(false);
        localStorage.clear();
        history.push('/');
        setInfoMessage({ message: data.message, fail: false })
      })
      .catch(showError);
  };

  const handleUpdateProfile = ({ name, email }) => {
    userApi.updateUser({ name, email })
      .then((data) => {
        setCurrentUser(data);
        // history.push('/');
        setInfoMessage({ message: "Профиль обновлен!", fail: false });
      })
      .catch(showError);
  };

  const handleFindMovie = async (textFilter, shortFilms) => {

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
      const foundMovies = findMoviesByKeyword(allMovies, textFilter, shortFilms);
      setListFoundMovies(foundMovies);
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));

      setSavedFilter(textFilter);
      localStorage.setItem('savedFilter', textFilter);

      setOnlyShortFilms(shortFilms);
      localStorage.setItem('shortFilms', shortFilms);

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

  const handleFindSavedMovie = (textFilter, shortFilms) => {
    setIsSearching(true);
    setListFoundSavedMovies(findMoviesByKeyword(savedMovies, textFilter, shortFilms));

    setSavedFilterSavedFilms(textFilter);
    localStorage.setItem('savedFilterSavedFilms', textFilter);

    setOnlyShortSavedFilms(shortFilms);
    localStorage.setItem('shortSavedFilms', shortFilms);

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
      .then(() => {
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
              {!isLoggedIn ? <Login onSubmit={handleLogin} /> : <Redirect to="/movies" />}
            </Route>
            <Route path="/signup">
              {!isLoggedIn ? <Register onSubmit={handleRegister} /> : <Redirect to="/movies" />}
            </Route>

            <ProtectedRoute isLoggedIn={isLoggedIn} path="/movies">
              <Movies
                isLoading={isLoading}
                isSearching={isSearching}
                movies={listFoundMovies}
                savedMovies={savedMovies}
                isShortFilms={onlyShortFilms}
                savedFilter={savedFilter}
                onFindMovie={handleFindMovie}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                onBurgerClick={handleBurgerClick} />
            </ProtectedRoute>

            <ProtectedRoute isLoggedIn={isLoggedIn} path="/saved-movies">
              <SavedMovies
                movies={listFoundSavedMovies}
                isShortFilms={onlyShortSavedFilms}
                savedFilter={savedFilterSavedFilms}
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
