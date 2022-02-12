import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import iconSearch from '../../images/search.svg';

import './SearchForm.css';

const SearchForm = ({ onSubmit, isShortFilms, savedFilter }) => {

  const location = useLocation();
  const [onlyShortFilms, setOnlyShortFilms] = useState(isShortFilms);
  const [textFilter, setTextFilter] = useState(savedFilter || '');
  const [textFilterError, setTextFilterError] = useState('');

  const isFormValid = (filter) => {
    return location.pathname !== '/saved-movies' & !filter ? false : true;
  };

  const handleTextFilterChange = (evt) => {
    setTextFilter(evt.target.value);
    if (isFormValid(evt.target.value)) {
      setTextFilterError('');
    } else {
      setTextFilterError('Нужно ввести ключевое слово');
    }
  };

  const handleCheckboxChange = (evt) => {
    setOnlyShortFilms(evt.target.checked);
    if (isFormValid(textFilter)) {
      setTextFilterError('');
      onSubmit(textFilter, evt.target.checked);
    } else {
      setTextFilterError('Нужно ввести ключевое слово');
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isFormValid(textFilter)) {
      setTextFilterError('');
      onSubmit(textFilter, onlyShortFilms);
    } else {
      setTextFilterError('Нужно ввести ключевое слово');
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
