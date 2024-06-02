import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./header.css";

export const Header = ({ toggleCartPopup }) => {
    const cartItems = useSelector((state) => state.cart.items);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <header className="header">
            <div className="container header__iner">
                <Link className="logo" to="/">
                    <img className="logo__img" src={process.env.PUBLIC_URL + '/images/logo-header.png'} alt="" />
                </Link>
                <nav className={`menu  ${isMenuOpen ? 'menu--open' : ''}`} >
                    <button className="menu__btn" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    {isMenuOpen && (
                        <button className="menu__close-btn" onClick={toggleMenu}>
                            &#x2715; 
                        </button>
                    )}
                    <ul className="menu__list ">
                        <li className="menu__list-item">
                            <Link className="menu__list-link" to="/about">Про нас</Link>
                        </li>
                        <li className="menu__list-item">
                            <Link className="menu__list-link" to="/products">Каталог</Link>
                        </li>
                        <li className="menu__list-item">
                            <Link className="menu__list-link" to="/team">Команда</Link>
                        </li>
                        <li className="menu__list-item">
                            <Link className="menu__list-link" to="/feedback">Відгуки</Link>
                        </li>
                        <li className="menu__list-item">
                            <Link className="menu__list-link" to="/courses">Курси</Link>
                        </li>
                        <li className="menu__list-item">
                            <Link className="menu__list-link" to="/contacts">Контакти</Link>
                        </li>
                    </ul>
                </nav>
                <a className="phone" href="tel:+4565789876">+45 65 78 98 76</a>
                <div className="cart cart-btn" onClick={toggleCartPopup}>
                    {cartItems.length}
                    <i className="fa-solid fa-basket-shopping"></i>
                </div>
            </div>
        </header >
    );
};