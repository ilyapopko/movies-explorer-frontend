import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import iconSearch from '../../images/search.svg';
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => (
  <section className="search-film">
    <div className="search-form__container">
      <form className="search-form" onSubmit={onSubmit}>
        <div className="search-film__container">
          <img src={iconSearch} alt="Значок с лупой" className="search-film__icon" />
          <input className="search-film__input" type="text" placeholder="Фильм" />
          <button className="search-film__find" type="submit">Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  </section>
);

export default SearchForm;