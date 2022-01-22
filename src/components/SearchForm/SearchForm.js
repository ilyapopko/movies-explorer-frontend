import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import iconSearch from '../../images/search.svg';
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => (
  <section className="search-form">
    <div className="search-form__container">
      <form className="search-form__form" onSubmit={onSubmit}>
        <div className="search-form__film-container">
          <img src={iconSearch} alt="Значок с лупой" className="search-form__film-icon" />
          <input className="search-form__film-input" type="text" placeholder="Фильм" required/>
          <button className="search-form__film-find" type="submit">Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  </section>
);

export default SearchForm;
