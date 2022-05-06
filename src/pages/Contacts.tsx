import React from 'react';
import './Contacts.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacts() {
    return (
        <main className="container mt-4 mb-4 min-vh-100">
            <h1>Контакти та Адреса</h1>
            <p>motoroil@gmail.com</p>
            <p>+38 093 44 10 777</p>
            <p>м. Одеса, вул. М. Арнаутська, б. 26</p>
        </main>
    );
}

export default Contacts;
