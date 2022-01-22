import React, { useState, useEffect } from 'react';
import AuthComponent from '../AuthComponent/AuthComponent';
import useFormValidation from '../../hooks/useForm';

const Login = ({ onSubmit }) => {

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
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <AuthComponent
        title="Рады видеть!"
        hint="Ещё не зарегистрированы?"
        submitHeader="Войти"
        altLink="Регистрация"
        onSubmit={handleSubmit}
        isSubmitDisabled={isSubmitDisabled}
        >
        <label className="auth__label" htmlFor="email">E-mail</label>
        <input value={values.email || ''} className="auth__input" name="email" id="email" type="email" required
          onChange={handleInputChange} />
        <span className="auth__error auth__error_active" >{errors.email || ''}</span>
        <label className="auth__label" htmlFor="password">Пароль</label>
        <input value={values.password || ''} className="auth__input" name="password" id="password" type="password" required
          onChange={handleInputChange} />
        <span className="auth__error auth__error_active">{errors.password || ''}</span>
      </AuthComponent>
    </>
  );
};

export default Login;
