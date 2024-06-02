import React, { useState } from 'react';
import { Footer } from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./contacts.css";

export const SectionContacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Ім'я є обов'язковим";
        if (!email) {
            newErrors.email = "E-mail є обов'язковим";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Невірний формат e-mail";
        }
        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            await axios.post('http://localhost:3001/subscriptions', { name, email });
            alert('Підписка успішно оформлена');
            setName('');
            setEmail('');
            setErrors({});
        } catch (error) {
            console.error('Помилка при відправці даних', error);
            alert('Сталася помилка при відправці форми');
        }
    };

    return (
        <>
            <section className="contacts">
                <div className="container contacts__inner">
                    <form className="form" onSubmit={handleSubmit}>
                        <p className="form__title">
                            Підпишись на наші акції
                        </p>
                        <input
                            id="nameInput"
                            className="form__input"
                            type="text"
                            placeholder="Ім'я"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <div className="error-container">{errors.name}</div>}
                        <input
                            id="emailInput"
                            className="form__input"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="error-container">{errors.email}</div>}
                        <button type="submit" className="form__btn">Підписатись</button>
                    </form>
                    <img className="contacts__img" src={process.env.PUBLIC_URL + '/images/contacts.jpg'} alt="" />
                </div>
            </section>
            <section className="promo">
                <div className="container promo__inner">
                    <p className="promo__text">Купуйте більше, економте більше</p>
                    <Link className="promo__link" to="/products" href="#">В каталог</Link>
                </div>
            </section>
            <Footer />
        </>
    );
};

