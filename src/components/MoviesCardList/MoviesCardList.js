import React from 'react';
import './MoviesCardList.css';

const MoviesCardList = () => (
  <ul className="movies__list">
    <li className="movies__card">
      <div className="movies__card-header">
        <div className="movies__card-caption">
          <h2 className="movies__card-title">33 слова о дизайне</h2>
          <p className="movies__card-duration">1ч 47м</p>
        </div>
        <button className="movies__card-save movies__card_type_saved" title="Сохранить в профиле"></button>
      </div>
      <img src="./images/picture1.png" alt="" className="movies__card-picture" />
    </li>

    <li className="movies__card">
      <div className="movies__card-header">
        <div className="movies__card-caption">
          <h2 className="movies__card-title">33 слова о дизайне</h2>
          <p className="movies__card-duration">1ч 47м</p>
        </div>
        <button className="movies__card-save" title="Сохранить в профиле"></button>
      </div>
      <img src="./images/picture2.png" alt="Превью клипа" className="movies__card-picture" />
    </li>

    <li className="movies__card">
      <div className="movies__card-header">
        <div className="movies__card-caption">
          <h2 className="movies__card-title">33 слова о дизайне</h2>
          <p className="movies__card-duration">1ч 47м</p>
        </div>
        <button className="movies__card-save movies__card_type_saved" title="Сохранить в профиле"></button>
      </div>
      <img src="./images/picture3.png" alt="" className="movies__card-picture" />
    </li>

  </ul>
);

export default MoviesCardList;
