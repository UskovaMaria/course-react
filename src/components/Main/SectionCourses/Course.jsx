import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';

export const Course = (props) => {
  const { id, name, img, price, text } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, img, price }));
  };

  return (
    <div className="products__item courses__item" data-id={id}>
      <div className="courses__item-img">
        <img className="products__item-img" src={img} alt="" />
        <p className="courses__title">{name}</p>
        <p className="courses__time">
          Навчання <span>- 20 год</span>
        </p>
        <p className="courses__price">Ціна - {price}$</p>
      </div>
      <h4 className="products__item-title">{name}</h4>
      <p className="products__item-text">{text}</p>
      <button className="button buy-btn" onClick={handleAddToCart}>Купити курс</button>
    </div>
  );
};