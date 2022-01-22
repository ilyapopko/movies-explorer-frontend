import React, { useState, useEffect } from 'react';
import useFormValidation from '../../hooks/useForm';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import EditForm from '../EditForm/EditForm';

import './Profile.css';

const Profile = ({ onSubmit, onBurgerClick, onLogout }) => {

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const { values, handleInputChange, errors, isValid, resetForm } = useFormValidation();

  useEffect(() => {
    resetForm();
    setIsSubmitDisabled(true);
  }, [resetForm]);

  useEffect(() => {
    setIsSubmitDisabled(!isValid);
  }, [isValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsSubmitDisabled(true);
    onSubmit();
    resetForm();
  };

  return (
    <>
      <Header type="default">
        <Navigation type="authorized" onBurgerClick={onBurgerClick} />
      </Header>
      <section className="profile">
        <EditForm
          section="profile"
          title="Привет, Виталий!"
          submitHeader="Редактировать"
          isSubmitDisabled={isSubmitDisabled}
          onSubmit={handleSubmit}>
          <div className="profile__filed-container">
            <div className="profile__input-container">
              <label className="profile__label" htmlFor="name">Имя</label>
              <input value={values.name || ''} className="profile__input" name="name" id="name" type="text"
                minLength="2" maxLength="30" required onChange={handleInputChange} />
            </div>
            <span className="profile__error profile__error_active">{errors.name || ''}</span>
          </div>
          <div className="profile__filed-container">
            <div className="profile__input-container">
              <label className="profile__label" htmlFor="email">E-mail</label>
              <input value={values.email || ''} className="profile__input" name="email" id="email" type="email"
                required onChange={handleInputChange} />
            </div>
            <span className="profile__error profile__error_active">{errors.email || ''}</span>
          </div>
        </EditForm>
        <button className="profile__signout" onClick={onLogout}>Выйти из аккаунта</button>
      </section>
    </>);
};

export default Profile;
