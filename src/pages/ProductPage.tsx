import React from 'react';
import './ProductPage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import AppContext, {ContextData} from "../Context";
import {OilCapacity, OilEngineType, OilOliveBaseType, OilSaeViscosity, ProductItem, PurchaseItem} from "../shareData";

function ProductPage() {

    const [productItem, setProductItem] = React.useState<ProductItem>({} as ProductItem);
    const [purchaseItem, setPurchaseItem] = React.useState<PurchaseItem>({} as PurchaseItem);
    const [isLoading, setLoading] = React.useState(true);

    const {id} = useParams();
    const context = React.useContext(AppContext) as ContextData;

    React.useEffect(() => {
        setLoading(true);
        let item = context.getProduct(Number(id));
        setProductItem(item);
        let newPurchaseItem = new PurchaseItem(item.productId, item, 1, item.price);
        setPurchaseItem(newPurchaseItem);
        console.log("Load product");
        setLoading(false);
    }, [id]);

    return (
        <main className="container mt-3 mb-3">
            <div className="row">
                <h1>{productItem.title}</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <img src={"../" + (productItem.imgUrl ? productItem.imgUrl : "defaultImg.jpg")}
                             className="card-img img-fluid item-icon" alt="..."/>
                    </div>
                </div>
                <div className="col-md-6">

                    <ul className="list-group list-group-flush">
                        {productItem.producer != "" ? <li className="list-group-item">Виробник: {productItem.producer}</li> : null}
                        {productItem.ean != "" ? <li className="list-group-item">EAN: {productItem.ean}</li> : null}
                        {productItem.saeViscosity != OilSaeViscosity.None ? <li className="list-group-item">В'язкість по SAE: {productItem.saeViscosity}</li> : null}
                        {productItem.capacity != OilCapacity.None ? <li className="list-group-item">Ємність, л: {productItem.capacity}</li> : null}
                        {productItem.apiClassification?.length > 0 ? <li className="list-group-item">Класифікація API: {productItem.apiClassification.join(", ")}</li> : null}
                        {productItem.aceaClassification?.length > 0 ? <li className="list-group-item">Класифікація ACEA: {productItem.aceaClassification.join(", ")}</li> : null}
                        {productItem.ilsacClassification?.length > 0 ? <li className="list-group-item">Класифікація ILSAC: {productItem.ilsacClassification.join(", ")}</li> : null}
                        {productItem.engineType != OilEngineType.None ? <li className="list-group-item">Тип двигуна: {productItem.engineType}</li> : null}
                        {productItem.oliveBaseType != OilOliveBaseType.None ? <li className="list-group-item">Тип основи оливи: {productItem.oliveBaseType}</li> : null}
                    </ul>

                    <div className="mt-xxl-2">
                        <h3>Ціна {productItem.price} ₴</h3>
                        <button type="button" className="btn btn-light align-content-end"
                                onClick={() => context.addToCart(purchaseItem)}>Додати до кошику
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-xxl-2">
                <p>{productItem.description}</p>
            </div>
        </main>
    );
}

export default ProductPage;
