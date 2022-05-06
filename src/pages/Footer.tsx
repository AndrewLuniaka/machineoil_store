import React from 'react';
import './Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <footer className="container py-5">
                <div className="row">

                    <div className="col-4">
                        <h5>Допомога</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/payment_delivery" className="nav-link p-0 link-dark">Оплата та Доставка</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/payment_delivery" className="nav-link p-0 link-dark">Повернення товару</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h5>Інформація</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/contacts" className="nav-link p-0 link-dark">Співпраця</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/privacy_policy" className="nav-link p-0 link-dark">Умови використання</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/feedback" className="nav-link p-0 link-dark">Зворотній зв'язок</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h5>Контакти та Адреса</h5>
                        <p>motoroil@gmail.com</p>
                        <p>+38 093 44 10 777</p>
                        <p>м. Одеса, вул. М. Арнаутська, б. 26</p>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p>© 2022 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="#">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                        </a></li>
                        <li className="ms-3"><a className="link-dark" href="#">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        </a></li>
                        <li className="ms-3"><a className="link-dark" href="#">
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
