import React from 'react';
import "./team.css";

export const SectionTeam = () => {
    return (
        <section className="team section">
            <div className="container section__inner">
                <div className="section__descr">
                    <h2 className="title">
                        Наші викладачі
                    </h2>
                    <p className="section__text">
                        Ці люди працюють разом, щоб створювати курси для вас,
                        які допоможуть вам почати власний бізнес або хоббі.
                    </p>
                </div>
                <div className="team__content section__content-descr">
                    <div className="team__item">
                        <img src={process.env.PUBLIC_URL + '/images/team-1.jpg'} alt="" className="team__img" />
                        <div className="team__item-box">
                            <p className="team__item-name">Викладач Богдан</p>
                            <p className="team__item-descr">Має досвід викладання і роботи 4 роки </p>
                        </div>
                    </div>
                    <div className="team__item">
                        <img src={process.env.PUBLIC_URL + '/images/team-2.jpg'} alt="" className="team__img" />
                        <div className="team__item-box">
                            <p className="team__item-name">Викладач Анна</p>
                            <p className="team__item-descr">Має досвід викладання і роботи 6 років</p>
                        </div>
                    </div>
                    <div className="team__item">
                        <img src={process.env.PUBLIC_URL + '/images/team-3.jpg'} alt="" className="team__img" />
                        <div className="team__item-box">
                            <p className="team__item-name">Викладач Галина</p>
                            <p className="team__item-descr">Навчає сфері дизайну та декорування</p>
                        </div>
                    </div>
                    <div className="team__item">
                        <img src={process.env.PUBLIC_URL + '/images/team-4.jpg'} alt="" className="team__img" />
                        <div className="team__item-box">
                            <p className="team__item-name">Маркетолог Ольга</p>
                            <p className="team__item-descr">Допоможе вам з рекламою</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

