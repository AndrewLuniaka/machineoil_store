import React from 'react';
import './Home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from "react-router-dom";

function Home() {
    return (
        <main className="container mt-3">

            <div className="row">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="carousel/slider_1.jpg" alt="" className="d-block img-fluid w-100"/>
                            <div className="fade-bg card-img-overlay"></div>
                            <div className="carousel-caption">
                                <h3>100% фірмові моторні оливи</h3>
                                <p>Ми знаємо, як важливо застосовувати якісну моторну оливу, і гарантуємо, що всі оливи, представлені на сайті, на 100% справжні</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="carousel/slider_2.jpg" alt="" className="d-block img-fluid w-100"/>
                            <div className="fade-bg card-img-overlay"></div>
                            <div className="carousel-caption">
                                <h3>Гарантований підбір запчастин</h3>
                                <p>Підбирати запчастини - наша професійна робота і відповідальність фахівці перевірять вибрані товари на відповідність до вашого авто</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="carousel/slider_3.jpg" alt="" className="d-block img-fluid w-100"/>
                            <div className="fade-bg card-img-overlay"></div>
                            <div className="carousel-caption">
                                <h3>Оперативна доставка без передоплати</h3>
                                <p>Ми знаємо, як важливо отримати запчастини вчасно. Тому доправимо ваше замовлення протягом доби</p>
                            </div>
                        </div>
                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Home;
