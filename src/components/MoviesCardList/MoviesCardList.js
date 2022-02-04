import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, savedMovies, isSavedMovies, onSaveMovie, onDeleteMovie }) => (
  <ul className="movies__list">
    {
      movies.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            isSavedMovies={isSavedMovies}
            key={movie.movieId}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            savedMovies={savedMovies}
          />)

      })
    }
  </ul>
);

export default MoviesCardList;
