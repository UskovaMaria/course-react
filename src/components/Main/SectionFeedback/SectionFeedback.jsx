import React from 'react';
import "./feedback.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';

export const SectionFeedback = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (id, name, img, price) => {
        dispatch(addToCart({ id, name, img, price }));
    };

    return (
        <section className="feedback section">
            <div className="container feedback__inner section__inner">
                <div className="feedback__descr section__descr">
                    <h2 className="title">Відгуки від клієнтів</h2>
                    <p className="section__text">
                        Наші покупці мають різний вік, статус, заняття і інтереси, але у них є
                        одна спільна риса - вони прагнуть до гармонії і знаходять радість у
                        маленьких радощах життя, які створюють атмосферу затишку та гармонії у
                        їхньому домі.
                    </p>
                </div>
                <div className="feedback__content section--decor">
                    <Swiper
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="feedback__slider"
                        modules={[Pagination, Navigation]}
                    >
                        <SwiperSlide>
                            <div className="feedback__item">
                                <img className="feedback__item-img" src={process.env.PUBLIC_URL + '/images/slide.jpg'} alt="" />
                                <div className="feedback__item-content">
                                    <a className="feedback__item-sociallink" href="#">
                                        <img src={process.env.PUBLIC_URL + '/images/instagram.svg'} alt="" />
                                    </a>
                                    <p className="feedback__item-name">Іван Пилипенко</p>
                                    <p className="feedback__item-text">
                                        Я замовив свічку в формі сердечка на День Святого Валентина
                                        для моєї дівчини і вона була просто неймовірна! Запах був
                                        дуже приємним і романтичним, а форма сердечка була досконалою
                                        для цього свята. Моя дівчина була дуже задоволена подарунком,
                                        і я точно замовлю ще свічок від цього сайту!
                                    </p>
                                    <button
                                        className="button feedback__item-btn"
                                        data-product-id="4"
                                        onClick={() => handleAddToCart(4, 'Жіноча чарівність', `${process.env.PUBLIC_URL}/images/slide.jpg`, 10)}
                                    >
                                        Купити цей товар
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feedback__item">
                                <img className="feedback__item-img" src={process.env.PUBLIC_URL + '/images/product-1.jpg'} alt="" />
                                <div className="feedback__item-content">
                                    <a className="feedback__item-sociallink" href="#">
                                        <img src={process.env.PUBLIC_URL + '/images/instagram.svg'} alt="" />
                                    </a>
                                    <p className="feedback__item-name">Іван Пилипенко</p>
                                    <p className="feedback__item-text">
                                        Я замовив свічку в формі сердечка на День Святого Валентина
                                        для моєї дівчини і вона була просто неймовірна! Запах був
                                        дуже приємним і романтичним, а форма сердечка була досконалою
                                        для цього свята. Моя дівчина була дуже задоволена подарунком,
                                        і я точно замовлю ще свічок від цього сайту!
                                    </p>
                                    <button
                                        className="button feedback__item-btn"
                                        data-product-id="1"
                                        onClick={() => handleAddToCart(1, 'Сердечко кохання', `${process.env.PUBLIC_URL}/images/product-1.jpg`, 10)}
                                    >
                                        Купити цей товар
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feedback__item">
                                <img className="feedback__item-img" src={process.env.PUBLIC_URL + '/images/product-2.jpg'} alt="" />
                                <div className="feedback__item-content">
                                    <a className="feedback__item-sociallink" href="#">
                                        <img src={process.env.PUBLIC_URL + '/images/instagram.svg'} alt="" />
                                    </a>
                                    <p className="feedback__item-name">
                                        Іван Пилипенко
                                    </p>
                                    <p className="feedback__item-text">
                                        Я замовив свічку в формі сердечка на День Святого Валентина
                                        для моєї дівчини і вона була просто неймовірна! Запах був
                                        дуже приємним і романтичним, а форма сердечка була досконалою
                                        для цього свята. Моя дівчина була дуже задоволена подарунком,
                                        і я точно замовлю ще свічок від цього сайту!"
                                    </p>
                                    <button
                                        className="button feedback__item-btn"
                                        data-product-id="2"
                                        onClick={() => handleAddToCart(2, 'Вихір кохання', `${process.env.PUBLIC_URL}/images/product-2.jpg`, 20)}
                                    >
                                        Купити цей товар
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feedback__item">
                                <img className="feedback__item-img" src={process.env.PUBLIC_URL + '/images/product-3.jpg'} alt="" />
                                <div className="feedback__item-content">
                                    <a className="feedback__item-sociallink" href="#">
                                        <img src={process.env.PUBLIC_URL + '/images/instagram.svg'} alt="" />
                                    </a>
                                    <p className="feedback__item-name">
                                        Іван Пилипенко
                                    </p>
                                    <p className="feedback__item-text">
                                        Я замовив свічку в формі сердечка на День Святого Валентина
                                        для моєї дівчини і вона була просто неймовірна! Запах був
                                        дуже приємним і романтичним, а форма сердечка була досконалою
                                        для цього свята. Моя дівчина була дуже задоволена подарунком,
                                        і я точно замовлю ще свічок від цього сайту!"
                                    </p>
                                    <button
                                        className="button feedback__item-btn"
                                        data-product-id="3"
                                        onClick={() => handleAddToCart(3, 'Веселка', `${process.env.PUBLIC_URL}/images/product-3.jpg`, 10)}
                                    >
                                        Купити цей товар
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

