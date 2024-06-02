import React from 'react';
import "./footer.css";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__contacts">
                        <a className="footer__phone" href="tel:+4565789876">+45 65 78 98 76</a>
                        <a className="email" href="emailto:candelsCandels@gmail.com">candelsCandels@gmail.com</a>
                        <ul className="footer__social">
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link">
                                    <img src={process.env.PUBLIC_URL+'/images/facebook.svg'} alt="" className="footer__social-img" />
                                </a>
                            </li>
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link">
                                    <img src={process.env.PUBLIC_URL+'/images/instagram.svg'} alt="" className="footer__social-img" />
                                </a>
                            </li>
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link">
                                    <img src={process.env.PUBLIC_URL+'/images/linkedin.svg'} alt="" className="footer__social-img" />
                                </a>
                            </li>
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link">
                                    <img src={process.env.PUBLIC_URL+'/images/youtube.svg'} alt="" className="footer__social-img" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

