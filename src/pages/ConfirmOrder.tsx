import React, {FormEvent} from 'react';
import './ConfirmOrder.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import AppContext, {ContextData} from "../Context";
import {PurchaseOrder} from "../shareData";
import {v4} from "uuid";

function ConfirmOrder() {

    const [lastname, setLastname] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");

    const context = React.useContext(AppContext) as ContextData;
    const navigate = useNavigate();
    const items = context.purchaseList;

    React.useEffect(() => {
        if (context.itemsInCart <= 0) {
            navigate("/", {replace: true});
        }
    }, []);

    function getTotalPrice(): number {
        return items.purchasesInCart ? items.purchasesInCart.reduce((sum, current) => sum + (current.price * current.count), 0) : 0;
    }

    function submitOrder(event: FormEvent<HTMLFormElement>) {
        console.log("Order confirmed");
        event.preventDefault();

        if (lastname == "" ||
            firstname == "" ||
            phone == "" ||
            email == "") {
            return;
        }
        let order: PurchaseOrder = new PurchaseOrder("", v4(), lastname, firstname, phone, email, context.purchaseList.purchasesInCart);
        context.confirmOrder(order);
        context.clearCart();
        navigate("/", {replace: true});
    }

    return (
        <main className="container mt-3 mb-3">
            <h1>Оформлення замовлення</h1>
            <div className="row">
                <div className="col-md-9">
                    <div className="container">
                        <form id="orderForm" onSubmit={(e) => submitOrder(e)} className="was-validated">
                            <div className="row">
                                <div className="col-md-6 mb-3 mt-3">
                                    <label htmlFor="lastname" className="form-label text-muted"> Прізвище </label>
                                    <input type="lastname" className="form-control" id="lastname" onChange={(e) => setLastname(e.target.value)} placeholder="Введіть прізвище" name="lastname"/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Поле заповнене невірно!</div>
                                </div>

                                <div className="col-md-6 mb-3 mt-3">
                                    <label htmlFor="firstname" className="form-label text-muted"> Ім'я </label>
                                    <input type="firstname" className="form-control" id="firstname" onChange={(e) => setFirstname(e.target.value)} placeholder="Введіть Ім'я" name="firstname"/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Поле заповнене невірно!</div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3 mt-3">
                                    <label htmlFor="phone" className="form-label text-muted"> Мобільний телефон </label>
                                    <input type="phone" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Введіть Мобільний телефон" name="phone"/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Поле заповнене невірно!</div>
                                </div>

                                <div className="col-md-6 mb-3 mt-3">
                                    <label htmlFor="email" className="form-label text-muted"> Електронна пошта </label>
                                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Введіть Електронна пошту" name="email"/>
                                    <div className="valid-feedback"></div>
                                    <div className="invalid-feedback">Поле заповнене невірно!</div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-dark bg-light sticky-top">
                        <div className="card-body">
                            <h2 className="card-title mb-lg-4">Разом</h2>

                            <div className="d-flex justify-content-between">
                                <p className="card-text text-muted">2 товари на суму</p>
                                <p className="card-text">{getTotalPrice().toLocaleString('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2})} ₴</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p className="card-text text-muted">Вартість доставки</p>
                                <p className="card-text">51 ₴</p>
                            </div>

                            <div className="d-flex mt-lg-4  mb-lg-4 justify-content-between">
                                <p className="card-text text-muted text-center mt-1 mb-0">До сплати</p>
                                <h3 className="card-text align-bottom">{(getTotalPrice() + 51).toLocaleString('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2})} ₴</h3>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success" form="orderForm" type="submit">Замовлення підтверджую</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ConfirmOrder;
