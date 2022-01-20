import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import testFile1 from '../../images/picture1.png';
import testFile2 from '../../images/picture2.png';
import testFile3 from '../../images/picture3.png';
import './MoviesCardList.css';

const MoviesCardList = () => (
  <ul className="movies__list">
    <MoviesCard
      title="33 слова о дизайне"
      duration="1ч 47м"
      filePath={testFile1} />
    <MoviesCard
      title="33 слова о дизайне"
      duration="1ч 47м"
      filePath={testFile2} />
    <MoviesCard
      title="33 слова о дизайне"
      duration="1ч 47м"
      filePath={testFile3} />
  </ul>
);

export default MoviesCardList;
