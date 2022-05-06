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

            <div className="row mb-4 mt-4">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card text-white text-center">
                                <img src="cat_cards/cat_linen.jpg" className="card-img img-fluid" alt="..."/>
                                <div
                                    className="card-img-overlay text-center d-flex flex-column justify-content-center mask">
                                    <h5 className="card-title">Ми використовуємо якісну та красиву лляну пряжу, щоб забезпечити вам чудовий комфорт за найкращою ціною</h5>

                                    <p className="card-text"></p>

                                    <h4><Link to="/bed_linen" className="mh-100 link-light bg-dark stretched-link mx-xxl-auto me-xxl-auto px-5 pe-5">Перейти</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card text-white text-center">
                                <img src="cat_cards/cat_bedding.jpg" className="card-img img-fluid" alt="..."/>
                                <div
                                    className="card-img-overlay text-center d-flex flex-column justify-content-center mask">
                                    <h5 className="card-title">Відпочиньте та занурьтесь в наші свжі наповнені подушки та ковдри, все що вам потрібно для найкращіх ночей</h5>

                                    <p className="card-text"></p>

                                    <h4><Link to="/blankets_pillows" className="mh-100 link-light bg-dark stretched-link mx-xxl-auto me-xxl-auto px-5 pe-5">Перейти</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card text-white text-center">
                                <img src="cat_cards/cat_nightwear.jpg" className="card-img img-fluid" alt="..."/>
                                <div
                                    className="card-img-overlay text-center d-flex flex-column justify-content-center mask">
                                    <h5 className="card-title">Ми створили цю колекцію красивих і зручних нічних речей і одягу для відпочинку саме для вас. </h5>

                                    <p className="card-text"></p>

                                    <h4><Link to="/nightwear" className="mh-100 link-light bg-dark stretched-link mx-xxl-auto me-xxl-auto px-5 pe-5">Перейти</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card text-white text-center">
                                <img src="cat_cards/cat_towels.jpg" className="card-img img-fluid" alt="..."/>
                                <div
                                    className="card-img-overlay text-center d-flex flex-column justify-content-center mask">
                                    <h5 className="card-title">Чудові бавовняні рушники різних кольорів доповнять вашу коллекцію постільної білизни</h5>

                                    <p className="card-text"></p>

                                    <h4><Link to="/towels" className="mh-100 link-light bg-dark stretched-link mx-xxl-auto me-xxl-auto px-5 pe-5">Перейти</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default Home;
