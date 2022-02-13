import React from 'react';
import { Link } from 'react-router-dom';
import EditForm from '../EditForm/EditForm';
import Header from '../Header/Header';
import './AuthComponent.css';

const AuthComponent = ({ title, hint, link, submitHeader, altLink, isSubmitDisabled, onSubmit, children }) => (
  <>
    <Header type="auth" />
    <section className="auth">
      <EditForm
        section="auth"
        title={title}
        submitHeader={submitHeader}
        isSubmitDisabled={isSubmitDisabled}
        onSubmit={onSubmit}>
        {children}
      </EditForm>
      <p className="auth__hint">{hint}&nbsp;
        <Link to={link} className="auth__link" aria-label={`Переход на страницу ${altLink}`}>
          {altLink}
        </Link>
      </p>
    </section>
  </>
);

export default AuthComponent;
