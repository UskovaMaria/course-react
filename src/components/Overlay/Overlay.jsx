import React from 'react';
import './overlay.css';

export const Overlay = ({ show, onClick }) => {
  return (
    <div className={`overlay ${show ? 'show' : ''}`} onClick={onClick}></div>
  );
};

