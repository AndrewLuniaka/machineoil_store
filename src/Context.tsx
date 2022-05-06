import React from "react";
import {ProductItem, PurchaseItem, PurchaseItemList, PurchaseOrder} from "./shareData";

export interface ContextData {
    itemsInCart: number,
    purchaseList: PurchaseItemList,

    addToCart(item: PurchaseItem): void,

    deleteFromCart(item: PurchaseItem): void,

    clearCart(): void,

    getProduct(id: number): ProductItem,

    confirmOrder(order: PurchaseOrder): void
}

const AppContext = React.createContext({});

export default AppContext;