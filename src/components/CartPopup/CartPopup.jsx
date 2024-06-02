import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../store/cartSlice';
import { selectCartItems } from '../../store/selectors';
import './cartPopup.css';

export const CartPopup = ({ isOpen, onClose }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [visibleDeletePopups, setVisibleDeletePopups] = useState({});

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach(item => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const toggleDeletePopup = (itemId) => {
    setVisibleDeletePopups(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };


  return (
    <div className={`cart-popup ${isOpen ? 'open' : ''}`}>
        <div className="cart-popup__title">
          <div className="close-btn" onClick={onClose}><i className="fa-solid fa-xmark"></i></div>
          <h2>Корзина</h2>
        </div>
        <div className="cart-popup__list">
          {cartItems.map(item => (
            <div key={item.id} className="cart-popup__item">
              <img className="cart-popup__img" src={item.img} alt={item.title} />
              <div className="cart-popup__details">
                <p className="cart-popup__name">{item.name}</p>
                <div className="cart-popup__quantity">
                  <div className="quantity-btn decrease-btn" onClick={() => handleDecreaseQuantity(item.id)}><i className="fa-solid fa-minus"></i></div>
                  <span>{item.quantity}</span>
                  <div className="quantity-btn increase-btn" onClick={() => handleIncreaseQuantity(item.id)}><i className="fa-solid fa-plus"></i></div>
                </div>
                <p className="cart-popup__price">{item.price * item.quantity}$</p>
                <div className="delete-btn" onClick={() => toggleDeletePopup(item.id)}>
                    <i className="fa-solid fa-ellipsis-v"></i>
                    {visibleDeletePopups[item.id] && (
                    <div className="delete-popup" onClick={() => handleRemoveFromCart(item.id)}>
                        <i className="fa-solid fa-trash"></i>
                        <p>Видалити</p>
                    </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="cart-popup__total">Загальна сума: <span className="total-amount">{totalPrice}$</span></p>
    </div>
  );
};

