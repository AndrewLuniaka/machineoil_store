import React from 'react';
import './CartList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext, {ContextData} from "../Context";
import {useNavigate} from "react-router-dom";
import {PurchaseItem} from "../shareData";

type CardProps = {
    card: PurchaseItem;
}

function CartCard(props: CardProps) {

    const context = React.useContext(AppContext) as ContextData;

    return (
        <div className="card mb-3 cart-card">
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={"../" + props.card.product.imgUrl} className="card-img img-fluid" alt="..."/>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h3 className="card-title">{props.card.product.title}</h3>
                        <p className="card-text">Ціна за одиницю {props.card.product.price} ₴</p>
                        <p className="card-text">Кількість: {props.card.count} шт.</p>
                    </div>
                    <button type="button" className="btn-close position-absolute top-0 end-0 me-2 mt-2" onClick={() => context.deleteFromCart(props.card)}/>
                </div>
            </div>
        </div>
    );
}

function CartList() {

    const context = React.useContext(AppContext) as ContextData;
    const items = context.purchaseList;
    const navigate = useNavigate();

    const validateRedirect = () => {
        if (context.itemsInCart <= 0) {
            navigate("/", {replace: true});
        } else {
            navigate("/confirmOrder", {replace: true});
        }
    }

    return (
        <div className="cart-panel offcanvas offcanvas-end w-auto" id="cartKey">
            <div className="offcanvas-header">
                <h1 className="offcanvas-title">Кошик</h1>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"/>
            </div>
            <div className="offcanvas-body">
                {items.purchasesInCart ?
                    items.purchasesInCart.map((product, index) => <CartCard key={index} card={product}/>) :
                    null}
            </div>
            <div className="row">
                <div className="col-md-4"/>
                <div className="col-md-8">
                    <div className="card border-success bg-light text-dark mb-4 mt-4 mx-lg-4">

                        <div className="card-body bg-success bg-opacity-10">
                            <div className="d-inline-flex">
                                <h4 className="me-4">{
                                    items.purchasesInCart ?
                                        items.purchasesInCart.reduce((sum, current) => sum + (current.price * current.count), 0)
                                            .toLocaleString('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2}) :
                                        0} ₴</h4>
                                <button className="btn btn-success text-center" type="button" data-bs-dismiss="offcanvas" onClick={() => validateRedirect()}>Підтвердити замовлення</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartList;