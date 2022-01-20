import React from 'react';
import './SearchForm.css';

const SearchForm = () => (
  <section className="search-film">
    <div className="search-form__container">
      <form className="search-form">
        <div className="search-film__container">
          <img src="./images/search.svg" alt="Значок с лупой" className="search-film__icon" />
          <input className="search-film__input" type="text" placeholder="Фильм" />
          <button className="search-film__find" >Найти</button>
        </div>
        <div className="search-film-checkbox__container">
          <input className="search-film__checkbox" type="checkbox" />
          <p className="search-film__label">Короткометражки</p>
        </div>
      </form>
    </div>
  </section>
);

export default SearchForm;
