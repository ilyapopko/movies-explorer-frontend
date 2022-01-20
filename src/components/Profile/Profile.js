import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import EditForm from '../EditForm/EditForm';
import './Profile.css';

const Profile = ({ onSubmit }) => (
  <>
    <Header type="default">
      <Navigation type="authorized" />
    </Header>
    <section className="profile">
      <EditForm
        section="profile"
        title="Привет, Виталий!"
        submitHeader="Редактировать"
        onSubmit={onSubmit}>
        <div className="profile__filed-container">
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input className="profile__input" name="name" id="name" type="text" minLength="2" maxLength="30" required />
          </div>
          <span className="profile__error">Поле заполнено неверно!</span>
        </div>
        <div className="profile__filed-container">
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input className="profile__input" name="email" id="email" type="email" required />
          </div>
          <span className="profile__error">Поле заполнено неверно!</span>
        </div>
      </EditForm>
      <button className="profile__signout">Выйти из аккаунта</button>
    </section>


    {/* <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <div className="profile__filed-container">
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input className="profile__input" name="name" id="name" type="text" minLength="2" maxLength="30" required />
          </div>
          <span className="profile__error">Поле заполнено неверно!</span>
        </div>
        <div className="profile__filed-container">
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input className="profile__input" name="email" id="email" type="email" required />
          </div>
          <span className="profile__error">Поле заполнено неверно!</span>
        </div>
        <button className="profile__button profile__button_type_submit">Редактировать</button>
      </form>
      <button className="profile__button profile__button_type_signout">Выйти из аккаунта</button>
    </section> */}
  </>
);

export default Profile;
