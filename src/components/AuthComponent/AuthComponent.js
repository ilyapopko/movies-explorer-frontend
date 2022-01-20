import React from 'react';
import Header from '../Header/Header';
import './AuthComponent.css';

const AuthComponent = () => (
    <>
      <Header/>

      <section className="auth">
        <h2 className="auth__title">Рады видеть!</h2>
        <form className="auth__form">

          <label className="auth__label" htmlFor="email">E-mail</label>
          <input className="auth__input" name="email" id="email" type="email" required/>
          <span className="auth__error">Поле заполнено неверно!</span>
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input className="auth__input" name="password" id="password" type="password" required/>
          <span className="auth__error">Поле заполнено неверно!</span>
          <button className="auth__submit">Войти</button>
        </form>

        <p className="auth__hint">Ещё не зарегистрированы?&nbsp;
          <a href="/signin" className="auth__link">Регистрация</a>
        </p>
      </section>
    </>
);

export default AuthComponent;
