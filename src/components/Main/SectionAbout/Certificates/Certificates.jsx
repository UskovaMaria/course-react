import React from 'react';
import './certificates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export const Certificates = () => {
    return (
        <section className="certificates section">
        <div className="container section__inner">
          <div className="certificates__descr section__descr">
            <h2 className="title">
              Сертифікати якості
            </h2>
            <p className="section__text">
              Сертифікати забезпечують додаткову довіру та впевненість для наших клієнтів.
            </p>
          </div>
          <div className="certificates__content section--decor">
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              navigation={true}
              className="certificates__slider"
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide>
                <img className="swiper-slide__img" src={process.env.PUBLIC_URL + '/images/cert-1.jpg'} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="swiper-slide__img" src={process.env.PUBLIC_URL + '/images/cert-2.jpg'} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="swiper-slide__img" src={process.env.PUBLIC_URL + '/images/cert-1.jpg'} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="swiper-slide__img" src={process.env.PUBLIC_URL + '/images/cert-2.jpg'} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    );
};

