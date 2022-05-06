import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/Header";
import CartList from "./pages/CartList";
import AppContext, {ContextData} from './Context';
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import ProductPage from "./pages/ProductPage";
import Contacts from "./pages/Contacts";
import PaymentDelivery from "./pages/PaymentDelivery";
import Feedback from "./pages/Feedback";
import ConfirmOrder from "./pages/ConfirmOrder";
import {
    OilaceaClassification,
    OilapiClassification,
    OilCapacity,
    OilEngineType,
    OililsacClassification,
    OilOliveBaseType,
    OilSaeViscosity,
    ProductItem,
    ProductItemCollection,
    ProductItemDB,
    PurchaseItem,
    PurchaseItemList,
    PurchaseOrder
} from "./shareData";
import Products from "./pages/Products";
import axios, {AxiosResponse} from "axios";
import {v4} from "uuid";
import PrivacyPolicy from "./pages/PrivacyPolicy";


const itemsKey = "itemsData";
const clientIdKey = "clientId";
const purchasesKey = "purchasesData";
const dataBasePath = "https://625eb8ff3b039517f1fb1530.mockapi.io/";

function App() {

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [clientId, setClientId] = React.useState(() => {
            const storedValue = localStorage.getItem(clientIdKey);
            return storedValue !== null ? JSON.parse(storedValue) : "";
        }
    );
    const [items, setItems] = React.useState<ProductItemCollection>(() => {
            const storedValue = localStorage.getItem(itemsKey);
            return storedValue !== null ? JSON.parse(storedValue) : {} as ProductItemCollection
        }
    );

    const [purchaseList, setPurchaseList] = React.useState<PurchaseItemList>(() => {
        const storedValue = localStorage.getItem(purchasesKey);
        return storedValue !== null ? JSON.parse(storedValue) : {} as PurchaseItemList
    });

    const [itemsInCart, setItemsInCart] = React.useState(0);

    React.useEffect(() => {
        async function fetchData() {
            try {
                setIsLoaded(false);

                let axiosResponse: AxiosResponse<ProductItemDB[]>;
                [axiosResponse] = await Promise.all([axios.get(dataBasePath + "oilitems")]);

                const productsCollection: ProductItemCollection = ConvertData(axiosResponse.data);

                setItems(productsCollection);
                localStorage.setItem(itemsKey, JSON.stringify(productsCollection));

                setItemsInCart(purchaseList.purchasesInCart ? purchaseList.purchasesInCart.length : 0);

                if (clientId === "") {
                    let id = v4();
                    localStorage.setItem(clientIdKey, JSON.stringify(id));
                }
                console.log("Data loaded successful!");
                setIsLoaded(true);
            } catch (error) {
                alert('Ошибка при запросе данных ;(');
                console.error(error);
            }
        }

        fetchData();
    }, []);

    function ConvertData(productsDB: ProductItemDB[]): ProductItemCollection {
        let products: ProductItem[] = [];

        for (let i = 0; i < productsDB.length; i++) {
            products[i] = new ProductItem(
                productsDB[i].productId,
                productsDB[i].categoryId,
                productsDB[i].imgUrl,
                productsDB[i].title,
                productsDB[i].description,
                productsDB[i].price,
                productsDB[i].producer,
                productsDB[i].ean,
                OilSaeViscosity[productsDB[i].saeViscosity as keyof typeof OilSaeViscosity],
                OilCapacity[productsDB[i].capacity as keyof typeof OilCapacity],
                productsDB[i].apiClassification.map((x) => OilapiClassification[x as keyof typeof OilapiClassification]),
                productsDB[i].aceaClassification.map((x) => OilaceaClassification[x as keyof typeof OilaceaClassification]),
                productsDB[i].ilsacClassification.map((x) => OililsacClassification[x as keyof typeof OililsacClassification]),
                OilOliveBaseType[productsDB[i].oliveBaseType as keyof typeof OilOliveBaseType],
                OilEngineType[productsDB[i].engineType as keyof typeof OilEngineType]
            );
        }

        return new ProductItemCollection(products);
    }

    const addToCart = (item: PurchaseItem) => {

        let isInList = purchaseList.purchasesInCart ?
            purchaseList.purchasesInCart.find((itemInCart) => itemInCart.purchaseId == item.purchaseId) :
            null;

        let newItemsInCart = purchaseList.purchasesInCart ? purchaseList.purchasesInCart : [];
        if (isInList) {
            let index = newItemsInCart.indexOf(isInList);
            isInList.count++;
            newItemsInCart[index] = isInList;
        } else {
            newItemsInCart.push(item);
        }
        let cartPurchases = new PurchaseItemList(newItemsInCart);
        localStorage.setItem(purchasesKey, JSON.stringify(cartPurchases));
        setPurchaseList(cartPurchases);
        setItemsInCart(newItemsInCart.length);
    }

    const deleteFromCart = (item: PurchaseItem) => {

        let isInList = purchaseList.purchasesInCart ?
            purchaseList.purchasesInCart.find((itemInCart) => itemInCart.purchaseId == item.purchaseId) :
            null;

        if (!isInList) {
            return;
        }

        let newItemsInCart = purchaseList.purchasesInCart.slice(0);

        let index = newItemsInCart.indexOf(isInList);
        if (index > -1) {
            newItemsInCart.splice(index, 1);
        }

        let cartPurchases = new PurchaseItemList(newItemsInCart);
        localStorage.setItem(purchasesKey, JSON.stringify(cartPurchases));
        setPurchaseList(cartPurchases);
        setItemsInCart(newItemsInCart.length);
    }

    const clearCart = () => {
        let list = new PurchaseItemList([]);
        localStorage.setItem(purchasesKey, JSON.stringify(list));
        setPurchaseList(list);
        setItemsInCart(0);
    }

    const confirmOrder = async (order: PurchaseOrder) => {

        if (order == null) return;
        order.clientId = clientId;
        await axios.post(dataBasePath + "orders", order);
    }

    function getProduct(id: number): ProductItem {
        let result = items.products.find((product) => product.productId == id);
        console.log("getProduct: " + id);
        console.log(result);
        return result ? result : new ProductItem(0,
            "",
            "",
            "",
            "",
            0,
            "",
            "",
            OilSaeViscosity.None,
            OilCapacity.None,
            [],
            [],
            [],
            OilOliveBaseType.None,
            OilEngineType.None,
        );
    }

    let contextData: ContextData = {
        itemsInCart,
        purchaseList,
        addToCart,
        deleteFromCart,
        clearCart,
        getProduct,
        confirmOrder
    };

    return (
        <div className="App">
            <AppContext.Provider value={contextData}>
                <Router>
                    <Header/>
                    <CartList/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/motor_oils" element={<Products category={"motor_oil"} items={items}/>}/>
                        <Route path="/:productId/:id" element={<ProductPage/>}/>
                        <Route path="/payment_delivery" element={<PaymentDelivery/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>a
                        <Route path="/feedback" element={<Feedback/>}/>
                        <Route path="/confirmOrder" element={<ConfirmOrder/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </AppContext.Provider>
        </div>
    );
}

export default App;

