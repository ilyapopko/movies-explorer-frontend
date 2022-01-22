import React from 'react';

const EditForm = ({ section, title, submitHeader, isSubmitDisabled, onSubmit, children }) => {
  return (
    <>
      <h2 className={`${section}__title`}>{title}</h2>
      <form className={`${section}__form`} name={`form_${section}`} onSubmit={onSubmit} noValidate>
        {children}
        <button className={`${section}__submit`}
          disabled={isSubmitDisabled}>
          {submitHeader}
        </button>
      </form>
    </>
  );
};

export default EditForm;