import React, { useState, useEffect } from 'react';
import { formatDuration } from '../../utils/utils';
import './MoviesCard.css';

const MoviesCard = ({ movie, isSavedMovies, onSaveMovie, onDeleteMovie, savedMovies }) => {

  const [isSaved, setIsSaved] = useState(false);
  const [savedMovie, setSavedMovie] = useState();

  useEffect(() => {
    setSavedMovie(savedMovies.find(m => m.movieId === movie.movieId));
    if (!!savedMovie) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [movie, savedMovie, savedMovies]);

  const handleSaveMovie = () => {
    onSaveMovie(movie);
  }

  const handleDeleteMovie = () => {
    onDeleteMovie(savedMovie.saveId, savedMovie.movieId);
  }

  const handleOpenLink = () => {
    window.open(movie.trailer);
  }

  return (
    <li className="movies__card">
      <div className="movies__card-header">
        <div className="movies__card-caption">
          <h2 className="movies__card-title">{movie.nameRU}</h2>
          <p className="movies__card-duration">{formatDuration(movie.duration)}</p>
        </div>
        <button
          className={`movies__card-save ${!isSavedMovies ?
            !isSaved ? '' : 'movies__card-save_type_saved'
            : 'movies__card-save_type_delete'}`}
          title={isSavedMovies ? "Удалить из профиля" : "Сохранить в профиле"}
          onClick={!isSaved ? handleSaveMovie : handleDeleteMovie}
        ></button>
      </div>
      <img
        src={movie.image}
        alt="Превью клипа"
        className="movies__card-picture"
        onClick={handleOpenLink} />
    </li>
  );
};

export default MoviesCard;
