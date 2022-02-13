import React, { useState, useEffect } from 'react';
import AuthComponent from '../AuthComponent/AuthComponent';
import useFormValidation from '../../hooks/useForm';

const Register = ({ onSubmit }) => {

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
        title="Добро пожаловать!"
        hint="Уже зарегистрированы?"
        link="/signin"
        submitHeader="Зарегистрироваться"
        altLink="Войти"
        isSubmitDisabled={isSubmitDisabled}
        onSubmit={handleSubmit}>

        <label className="auth__label" htmlFor="name">Имя</label>
        <input value={values.name || ''} className="auth__input" name="name" id="name" type="text"
          minLength="2" maxLength="30" pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+$" required onChange={handleInputChange} />
        <span className="auth__error auth__error_active">{errors.name || ''}</span>

        <label className="auth__label" htmlFor="email">E-mail</label>
        <input value={values.email || ''} className="auth__input" name="email" id="email" type="email"
          required onChange={handleInputChange} />
        <span className="auth__error auth__error_active">{errors.email || ''}</span>

        <label className="auth__label" htmlFor="password">Пароль</label>
        <input value={values.password || ''} className="auth__input" name="password" id="password" type="password"
          required onChange={handleInputChange} />
        <span className="auth__error auth__error_active">{errors.password || ''}</span>
      </AuthComponent>
    </>
  );
};

export default Register;
