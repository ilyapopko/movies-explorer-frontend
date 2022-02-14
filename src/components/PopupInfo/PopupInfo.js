import React from 'react';
import './PopupInfo.css';

const PopupInfo = ({ isOpen, onClose, message }) => {
  return (
    isOpen &&
    <section className={`popup-info ${isOpen ? "popup-info_opened" : ""}`}>
      <div className="popup-info__container" >
        <div
          className={`popup-info__status popup-info__status_type_${message.fail ? 'fail' : 'ok'}`}
        />
        <p className="popup-info__message">
          {message.message}
        </p>
        <button className="popup-info__close" type="button" aria-label="Закрыть" onClick={onClose} />
      </div>
    </section>
  );
};

export default PopupInfo;
