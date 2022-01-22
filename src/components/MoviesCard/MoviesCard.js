import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ title, duration, filePath, isSavedMovies, saved }) => {
  return (
    <li className="movies__card">
      <div className="movies__card-header">
        <div className="movies__card-caption">
          <h2 className="movies__card-title">{title}</h2>
          <p className="movies__card-duration">{duration}</p>
        </div>
        <button
          className={`movies__card-save ${!isSavedMovies ?
              !saved ? '' : 'movies__card-save_type_saved'
              : 'movies__card-save_type_delete'}`}
          title="Сохранить в профиле"></button>
      </div>
      <img src={filePath} alt="Превью клипа" className="movies__card-picture" />
    </li>
  );
};

export default MoviesCard;
