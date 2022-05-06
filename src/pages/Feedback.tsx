import React, {FormEvent} from 'react';
import './Feedback.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

function Feedback() {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [feedbackText, setFeedbackText] = React.useState("");

    const navigate = useNavigate();

    function submitFeedback(event: FormEvent<HTMLFormElement>) {
        navigate("/", {replace: true});
    }

    return (
        <main className="container mt-4 mb-4 min-vh-100">
            <h1>Залишити повідомлення</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <form id="orderForm" onSubmit={(e) => submitFeedback(e)} className="was-validated">
                            <div className="row">
                                <div className="col-md-6 mt-2">
                                    <label htmlFor="lastname" className="form-label text-muted"> Як до Вас звертатися </label>
                                    <input type="lastname" className="form-control" id="lastname" onChange={(e) => setName(e.target.value)} placeholder="Введіть як до Вас звертатися" name="lastname"/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Поле заповнене невірно!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label text-muted"> Мобільний телефон </label>
                                    <input type="phone" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Введіть Мобільний телефон" name="phone"/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Поле заповнене невірно!</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label text-muted"> Електронна пошта </label>
                                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Введіть Електронна пошту" name="email"/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Поле заповнене невірно!</div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="feedbackText" className="form-label text-muted"> Повідомлення </label>
                                    <textarea rows={6} className="form-control" id="feedbackText" onChange={(e) => setFeedbackText(e.target.value)} placeholder="Введіть повідомлення" name="feedbackText"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn-success" form="orderForm" type="submit">Відправити</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Feedback;
