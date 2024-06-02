import React, { useState } from 'react';
import './accordion.css'; 

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion__item">
      <div className="accordion__title" onClick={toggleOpen}>
        {title}
        <span className={`accordion__icon ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="accordion__text">
          {children}
        </div>
      )}
    </div>
  );
};