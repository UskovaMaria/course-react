import React from 'react';
import './formPopup.css';

export const FormPopup = ({ onClose }) => {

  return (
    <div className="form-popup">
      <div className="form-popup__content">
        <button className="form-popup__close-btn" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        <h2>Дякуємо за замовлення</h2>
      </div>
    </div>
  );
};