import React, { useState, useEffect, useContext, useCallback } from 'react';
import useFormValidation from '../../hooks/useForm';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import EditForm from '../EditForm/EditForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { EMAIL_PATTERN, NAME_PATTERN } from '../../utils/constants';

import './Profile.css';

const Profile = ({ onSubmit, onBurgerClick, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const { values, setValues, handleInputChange, errors, isValid } = useFormValidation();

  const checkStatusSubmit = useCallback(() => {
    return !isValid || values.name === currentUser.name & values.email === currentUser.email;
  }, [isValid, values, currentUser]);

  useEffect(() => {
    setValues({ 'name': currentUser.name, 'email': currentUser.email });
  }, [setValues, currentUser]);

  useEffect(() => {
    setIsSubmitDisabled(checkStatusSubmit());
  }, [checkStatusSubmit]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsSubmitDisabled(true);
    onSubmit(values);
    checkStatusSubmit();
  };

  return (
    <>
      <Header type="default">
        <Navigation type="authorized" onBurgerClick={onBurgerClick} />
      </Header>
      <section className="profile">
        <EditForm
          section="profile"
          title={`Привет, ${currentUser.name}`}
          submitHeader="Редактировать"
          isSubmitDisabled={isSubmitDisabled}
          onSubmit={handleSubmit}>
          <div className="profile__filed-container">
            <div className="profile__input-container">
              <label className="profile__label" htmlFor="name">Имя</label>
              <input value={values.name || ''} className="profile__input" name="name" id="name" type="text"
                minLength="2" maxLength="30" pattern={NAME_PATTERN} required onChange={handleInputChange} />
            </div>
            <span className="profile__error profile__error_active">{errors.name || ''}</span>
          </div>
          <div className="profile__filed-container">
            <div className="profile__input-container">
              <label className="profile__label" htmlFor="email">E-mail</label>
              <input value={values.email || ''} className="profile__input" name="email" id="email" type="email"
                pattern={EMAIL_PATTERN} required onChange={handleInputChange} />
            </div>
            <span className="profile__error profile__error_active">{errors.email || ''}</span>
          </div>
        </EditForm>
        <button className="profile__signout" onClick={onLogout}>Выйти из аккаунта</button>
      </section>
    </>);
};

export default Profile;
