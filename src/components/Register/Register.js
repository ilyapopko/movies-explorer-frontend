import React from 'react';
import AuthComponent from '../AuthComponent/AuthComponent';

const Register = ({ onSubmit }) => (
  <>
    <AuthComponent
      title="Добро пожаловать!"
      hint="Уже зарегистрированы?"
      submitHeader="Зарегистрироваться"
      altLink="Войти"
      onSubmit={onSubmit}>
      <label className="auth__label" htmlFor="name">Имя</label>
      <input className="auth__input" name="name" id="name" type="text" minLength="2" maxLength="30" required />
      <span className="auth__error">Поле заполнено неверно!</span>
      <label className="auth__label" htmlFor="email">E-mail</label>
      <input className="auth__input" name="email" id="email" type="email" required />
      <span className="auth__error">Поле заполнено неверно!</span>
      <label className="auth__label" htmlFor="password">Пароль</label>
      <input className="auth__input" name="password" id="password" type="password" required />
      <span className="auth__error">Поле заполнено неверно!</span>
    </AuthComponent>
  </>
);

export default Register;
