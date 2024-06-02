import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';

export const Product = (props) => {
  const { id, name, img, price, text } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log(handleAddToCart);
    dispatch(addToCart({ id, name, img, price }));
  };

  return (
    <div className="products__item" data-id={id}>
      <img className="products__item-img" src={img} alt="" />
      <p className="products__item-price">{price}</p>
      <h4 className="products__item-title">{name}</h4>
      <p className="products__item-text">{text}</p>
      <button className="button buy-btn" onClick={handleAddToCart}>Купити</button>
    </div>
  );
};