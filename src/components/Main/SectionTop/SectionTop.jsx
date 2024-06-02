import React from 'react';
import { Link } from 'react-router-dom';
import { Steps } from './Steps/Steps';
import './top.css';

export const SectionTop = () => {
    return (
        <>
        <section className="top">
            <div className="container top__inner">
                <div className="top__content">
                    <h3 className="top__title">
                        Створіть атмосферу затишку та гармонії!
                    </h3>
                    <p className="top__text">
                        Створіть особливу атмосферу у своєму домі
                        з нашою екологічно чистою та якісною продукцією
                        зі 100% натуральної соєвого воску.
                    </p>
                    <Link className="top__btn" to="/products">
                    <button className="top__buy">
                        Купити
                    </button>
                    </Link>
                </div>
                <picture className="top__img section--decor">
                    <source srcSet={process.env.PUBLIC_URL+'/images/top-s.png'} media="(max-width: 360px)" />
                    <source srcSet={process.env.PUBLIC_URL+'/images/top-m.png'} media="(max-width: 480px)" />
                    <img className="top__img-l" src={process.env.PUBLIC_URL+'/images/top-l.png'} alt="" />
                </picture>
            </div>
        </section>
        <Steps />
        </>
    );
};

