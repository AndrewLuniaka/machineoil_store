import React from 'react';
import './Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import AppContext, {ContextData} from '../Context';

function Header() {

    const context = React.useContext(AppContext) as ContextData;

    return (
        <header className="Header">
            <nav className="navbar navbar-expand-sm container-fluid">
                <Link className="navbar-brand logo d-inline-block align-text-top" to="/" title="Go to Homepage">MotorOil</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/motor_oils" className="nav-link menu-item link-dark mx-2">Мастила</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/payment_delivery" className="nav-link menu-item link-dark mx-2">Оплата та доставка</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacts" className="nav-link menu-item link-dark mx-2">Контакти</Link>
                    </li>
                </ul>
                <div className="d-inline-block align-items-center ms-auto me-xxl-5">
                    <a className="nav-link menu-item p-1 link-dark" id="headerCartLink" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartKey">
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <span className="">Кошик</span>(<span
                        id="headerCartTotal">{context.itemsInCart}</span>)
                    </a>
                </div>
            </nav>

        </header>
    );
}

export default Header;
