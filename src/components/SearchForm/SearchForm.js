import React, { useState, useEffect } from 'react';
import useFormValidation from '../../hooks/useForm';
// import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import iconSearch from '../../images/search.svg';

import './SearchForm.css';

const SearchForm = ({ movies, onSubmit }) => {

  const { values, handleInputChange, errors, isValid, resetForm } = useFormValidation();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  // const [textFilter, setTextFilter] = useState();
  const [onlyShortFilms, setOnlyShortFilms] = useState(false);

  useEffect(() => {
    setIsSubmitDisabled(!isValid);
  }, [isValid]);

  const handleCheckboxChange = (evt) => {
    setOnlyShortFilms(evt.target.checked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmitDisabled(true);
    onSubmit(values.textFilter, onlyShortFilms);
    resetForm();

  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <div className="search-form__film-container">
            <img src={iconSearch} alt="Значок с лупой" className="search-form__film-icon" />
            <input value={values.textFilter || ''} className="search-form__film-input"
              name="textFilter" type="text" placeholder="Фильм" required  minLength="2" onChange={handleInputChange} />
            <button className="search-form__film-find" type="submit" disabled={isSubmitDisabled}>Найти</button>
          </div>
          <div className="search-form__checkbox-container">
            <input value={onlyShortFilms} name="onlyShortFilms" className="search-form__checkbox" type="checkbox"
              onChange={handleCheckboxChange} />
            <p className="search-form__checkbox-label">Короткометражки</p>
          </div>
        </form>
        <span className="search-form__error search-form__error_active" >{errors.textFilter || ''}</span>
      </div>
    </section>
  );
};

export default SearchForm;
