import React from 'react';
import './about.css';
import './Accordion/accordion.css';
import { Accordion } from './Accordion/Accordion';
import { Certificates } from './Certificates/Certificates';


export const SectionAbout = () => {
  return (
    <>
      <section className="about">
        <div className="container about__inner section__inner">
            <div className="about__content section__descr">
              <h2 className="about__title title">
                Про нас
              </h2>
              <p className="about__text section__text">
                Богдан творець бренду який завжди зацікавлений у виготовленні
                різноманітних речей вдома. Він регулярно експериментував з
                різними матеріалами та інструментами, спробувавши свої сили у
                багатьох галузях, включаючи виготовлення свічок.
              </p>
              <p className="about__text section__text">
                Ссоєвий віск виготовляють із соєвих бобів, що зрощуються в Данії,
                і цей вид воску є екологічно чистим та безпечним для здоров'я.
              </p>
            </div>
            <ul className="about__list section--decor">
              <li className="about__item">
                <img className="about__item-img about__item-img-1" src={process.env.PUBLIC_URL + '/images/about-1.jpg'} alt="" />
                <p className="about__item-text about__item-text-1">Насолоджуйтеся моментом</p>
              </li>
              <li className="about__item">
                <img className="about__item-img about__item-img-2" src={process.env.PUBLIC_URL + '/images/about-2.png'} alt="" />
                <p className="about__item-text about__item-text-2">Створіть улюблену атмосферу</p>
              </li>
              <li className="about__item">
                <img className="about__item-img about__item-img-3" src={process.env.PUBLIC_URL + '/images/about-3.jpg'} alt="" />
                <p className="about__item-text about__item-text-3">Виготовлені з любов'ю</p>
              </li>
            </ul>
        </div>
      </section>
      
      <Certificates />
      <Accordion />
    </>
  );
};

