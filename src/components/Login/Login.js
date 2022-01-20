import React from 'react';
import AuthComponent from '../AuthComponent/AuthComponent';


const Login = ({ onSubmit }) => (
  <>
    <AuthComponent
      title="Рады видеть!"
      hint="Ещё не зарегистрированы?"
      submitHeader="Войти"
      altLink="Регистрация"
      onSubmit={onSubmit}>
      <label className="auth__label" htmlFor="email">E-mail</label>
      <input className="auth__input" name="email" id="email" type="email" required />
      <span className="auth__error">Поле заполнено неверно!</span>
      <label className="auth__label" htmlFor="password">Пароль</label>
      <input className="auth__input" name="password" id="password" type="password" required />
      <span className="auth__error">Поле заполнено неверно!</span>
    </AuthComponent>
  </>
);

export default Login;
