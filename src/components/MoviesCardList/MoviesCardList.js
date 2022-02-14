import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

import {
  MAX_MOVIES_COUNT_DESKTOP,
  MAX_MOVIES_COUNT_TABLET,
  MAX_MOVIES_COUNT_MOBILE,
  ADD_MOVIES_COUNT_DESKTOP,
  ADD_MOVIES_COUNT_TABLET,
  ADD_MOVIES_COUNT_MOBILE,
  MAX_SCREEN_SIZE_MOBILE,
  MAX_SCREEN_SIZE_TABLET,
  TIMEOUT_RESIZE
} from '../../utils/constants';

let checkResize = undefined;

const MoviesCardList = ({ movies, savedMovies, isSavedMovies, onSaveMovie, onDeleteMovie }) => {

  const [addMoviesCount, setAddMoviesCount] = useState(0);
  const [maxMoviesCount, setMaxMoviesCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (screenWidth <= MAX_SCREEN_SIZE_MOBILE) {
      setMaxMoviesCount(MAX_MOVIES_COUNT_MOBILE);
      setAddMoviesCount(ADD_MOVIES_COUNT_MOBILE);
    } else if (screenWidth <= MAX_SCREEN_SIZE_TABLET) {
      setMaxMoviesCount(MAX_MOVIES_COUNT_TABLET);
      setAddMoviesCount(ADD_MOVIES_COUNT_TABLET);
    } else {
      setMaxMoviesCount(MAX_MOVIES_COUNT_DESKTOP);
      setAddMoviesCount(ADD_MOVIES_COUNT_DESKTOP);
    }
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener('resize', checkingScreenWidth);
    return () => window.removeEventListener('resize', checkingScreenWidth);
  });

  const checkingScreenWidth = () => {
    if (checkResize) {
      clearTimeout(checkResize);
    }
    checkResize = setTimeout(() => setScreenWidth(window.innerWidth), TIMEOUT_RESIZE);
  };

  const handleShowMoreClick = () => {
    setMaxMoviesCount(maxMoviesCount + addMoviesCount);
  };

  return (
    <>
      <ul className="movies__list">
        {
          movies.reduce((result, movie) => {
            if (result.length < maxMoviesCount) {
              result.push(
                <MoviesCard
                  movie={movie}
                  isSavedMovies={isSavedMovies}
                  key={movie.movieId}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                  savedMovies={savedMovies} />,
              );
            }
            return result;
          }, [])
        }
      </ul>
      {movies.length > maxMoviesCount ? <button className="movies__show-more" onClick={handleShowMoreClick}>Ещё</button> : ''}
    </>
  )
};

export default MoviesCardList;
