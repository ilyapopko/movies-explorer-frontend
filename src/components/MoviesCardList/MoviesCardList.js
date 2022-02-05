import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const maxMoviesCountDesktop = 12;
const maxMoviesCountTablet = 8;
const maxMoviesCountMobile = 5;
const addMoviesCountDesktop = 3;
const addMoviesCountTablet = 2;
const addMoviesCountMobile = 2;

let checkResize = undefined;

const MoviesCardList = ({ movies, savedMovies, isSavedMovies, onSaveMovie, onDeleteMovie }) => {

  const [addMoviesCount, setAddMoviesCount] = useState(0);
  const [maxMoviesCount, setMaxMoviesCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (screenWidth <= 480) {
      setMaxMoviesCount(maxMoviesCountMobile);
      setAddMoviesCount(addMoviesCountMobile);
    } else if (screenWidth <= 768) {
      setMaxMoviesCount(maxMoviesCountTablet);
      setAddMoviesCount(addMoviesCountTablet);
    } else {
      setMaxMoviesCount(maxMoviesCountDesktop);
      setAddMoviesCount(addMoviesCountDesktop);
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
    checkResize = setTimeout(() => setScreenWidth(window.innerWidth), 300);
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
