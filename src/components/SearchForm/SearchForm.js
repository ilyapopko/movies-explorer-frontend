import React, { useState } from 'react';
import iconSearch from '../../images/search.svg';

import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {

  const [onlyShortFilms, setOnlyShortFilms] = useState(false);
  const [textFilter, setTextFilter] = useState('');
  const [textFilterError, setTextFilterError] = useState('');

  const handleTextFilterChange = (evt) => {
    setTextFilter(evt.target.value);
    if (!evt.target.value) {
      setTextFilterError('Нужно ввести ключевое слово');
    } else {
      setTextFilterError('');
    };
  };

  const handleCheckboxChange = (evt) => {
    setOnlyShortFilms(evt.target.checked);
    onSubmit(textFilter, evt.target.checked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!textFilter) {
      setTextFilterError('Нужно ввести ключевое слово');
      return;
    } else {
      setTextFilterError('');
      onSubmit(textFilter, onlyShortFilms);
    }
  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <div className="search-form__film-container">
            <img src={iconSearch} alt="Значок с лупой" className="search-form__film-icon" />
            <input value={textFilter} className="search-form__film-input"
              name="textFilter" type="text" placeholder="Фильм" required onChange={handleTextFilterChange} />
            <button className="search-form__film-find" type="submit" >Найти</button>
          </div>
          <div className="search-form__checkbox-container">
            <input checked={onlyShortFilms} name="onlyShortFilms" className="search-form__checkbox" type="checkbox"
              onChange={handleCheckboxChange} />
            <p className="search-form__checkbox-label">Короткометражки</p>
          </div>
        </form>
        <span className="search-form__error search-form__error_active" >{textFilterError}</span>
      </div>
    </section>
  );
};

export default SearchForm;
