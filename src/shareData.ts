export class PurchaseOrder {
    clientId: string;
    purchaseId: string;
    lastname: string;
    firstname: string;
    phone: string;
    email: string;
    purchasesInCart: PurchaseItem[];

    constructor(clientId: string, purchaseId: string, lastname: string, firstname: string, phone: string, email: string, purchasesInCart: PurchaseItem[]) {
        this.clientId = clientId;
        this.purchaseId = purchaseId;
        this.lastname = lastname;
        this.firstname = firstname;
        this.phone = phone;
        this.email = email;
        this.purchasesInCart = purchasesInCart;
    }
}

export class PurchaseItemList {
    purchasesInCart: PurchaseItem[];

    constructor(purchasesInCart: PurchaseItem[]) {
        this.purchasesInCart = purchasesInCart;
    }
}

export class PurchaseItem {
    purchaseId: number;
    product: ProductItem;
    count: number;
    price: number;

    constructor(id: number, product: ProductItem, count: number, price: number) {
        this.purchaseId = id;
        this.product = product;
        this.count = count;
        this.price = price;
    }
}

export class ProductItemCollection {
    products: ProductItem[];

    constructor(products: ProductItem[]) {
        this.products = products;
    }
}

export class ProductItemCollectionGrid {
    productsGrid: ProductItem[][];

    constructor(productsGrid: ProductItem[][]) {
        this.productsGrid = productsGrid;
    }
}

export class ProductItem {
    productId: number;
    categoryId: string;
    imgUrl: string;
    title: string;
    description: string;
    price: number;
    producer: string;
    ean: string;
    saeViscosity: OilSaeViscosity;
    capacity: OilCapacity;
    apiClassification: OilapiClassification[];
    aceaClassification: OilaceaClassification[];
    ilsacClassification: OililsacClassification[];
    oliveBaseType: OilOliveBaseType;
    engineType: OilEngineType;


    constructor(productId: number, categoryId: string, imgUrl: string, title: string, description: string, price: number, producer: string, ean: string, saeViscosity: OilSaeViscosity, capacity: OilCapacity, apiClassification: OilapiClassification[], aceaClassification: OilaceaClassification[], ilsacClassification: OililsacClassification[], oliveBaseType: OilOliveBaseType, engineType: OilEngineType) {
        this.productId = productId;
        this.categoryId = categoryId;
        this.imgUrl = imgUrl;
        this.title = title;
        this.description = description;
        this.price = price;
        this.producer = producer;
        this.ean = ean;
        this.saeViscosity = saeViscosity;
        this.capacity = capacity;
        this.apiClassification = apiClassification;
        this.aceaClassification = aceaClassification;
        this.ilsacClassification = ilsacClassification;
        this.oliveBaseType = oliveBaseType;
        this.engineType = engineType;
    }
}

export class ProductItemDB {
    productId: number;
    categoryId: string;
    imgUrl: string;
    title: string;
    description: string;
    price: number;
    producer: string;
    ean: string;
    saeViscosity: string;
    capacity: string;
    apiClassification: string[];
    aceaClassification: string[];
    ilsacClassification: string[];
    oliveBaseType: string;
    engineType: string;

    constructor(productId: number, categoryId: string, imgUrl: string, title: string, description: string, price: number, producer: string, ean: string, saeViscosity: string, capacity: string, apiClassification: string[], aceaClassification: string[], ilsacClassification: string[], oliveBaseType: string, engineType: string) {
        this.productId = productId;
        this.categoryId = categoryId;
        this.imgUrl = imgUrl;
        this.title = title;
        this.description = description;
        this.price = price;
        this.producer = producer;
        this.ean = ean;
        this.saeViscosity = saeViscosity;
        this.capacity = capacity;
        this.apiClassification = apiClassification;
        this.aceaClassification = aceaClassification;
        this.ilsacClassification = ilsacClassification;
        this.oliveBaseType = oliveBaseType;
        this.engineType = engineType;
    }
}

export enum OilSaeViscosity {
    None = "",
    ow16 = "0W-16",
    ow20 = "0W-20",
    ow30 = "0W-30",
    ow40 = "0W-40",
    fw20 = "5W-20",
    fw30 = "5W-30",
    fw40 = "5W-40",
    fw50 = "5W-50",
    tw30 = "10W-30",
    tw40 = "10W-40",
    tw50 = "10W-50",
    tw60 = "10W-60",
    fteenw40 = "15W-40",
    fteenw50 = "15W-50",
    twentyw50 = "20W-50",
    twentyw60 = "20W-60",
    thirteenw = "30W",
}

export enum OilCapacity {
    None = "",
    l095 = "0.95",
    l1 = "1",
    l2 = "2",
    l38 = "3.8",
    l4 = "4",
    l45 = "4.5",
    l473 = "4.73",
    l5 = "5",
    l6 = "6",
    l10 = "10",
    l20 = "20"
}

export enum OilapiClassification {
    None = "",
    SF = "SF",
    SG = "SG",
    SH = "SH",
    SJ = "SJ",
    SL = "SL",
    SM = "SM",
    SN = "SN",
    SNPlus = "SN Plus",
    SNRC = "SN-RC",
    SP = "SP",
    SPRC = "SP-RC",
    CC = "CC",
    CD = "CD",
    CE = "CE",
    CF = "CF",
    CF4 = "CF-4",
    CG4 = "CG-4",
    CH4 = "CH-4",
    CI4 = "CI-4",
    CJ4 = "CJ-4",
    CK4 = "CK-4",
    GL4 = "GL-4"
}

export enum OilaceaClassification {
    None = "",
    A1 = "A1",
    A2 = "A2",
    A3 = "A3",
    A5 = "A5",
    B1 = "B1",
    B2 = "B2",
    B3 = "B3",
    B4 = "B4",
    B5 = "B5",
    C1 = "C1",
    C2 = "C2",
    C3 = "C3",
    C4 = "C4",
    C5 = "C5",
    E2 = "E2",
    E3 = "E3",
    E4 = "E4",
    E5 = "E5",
    E6 = "E6",
    E7 = "E7",
    E9 = "E9",
}

export enum OililsacClassification {
    None = "",
    GF3 = "GF-3",
    GF4 = "GF-4",
    GF5 = "GF-5",
    GF6 = "GF-6",
    GF6A = "GF-6A",
    GF6B = "GF-6B"
}

export enum OilOliveBaseType {
    None = "",
    Hydrocracking = "Гідрокрекінгова",
    SemiSynthetic = "Напівсинтетична",
    Mineral = "Мінеральна",
    Synthetic = "Синтетична"
}

export enum OilEngineType {
    None = "",
    FourStroke = "4-х тактний",
    Gasoline = "Бензин",
    Hybrid = "Гібрид",
    Gas = "Газ",
    Diesel = "Дизель",
    Worried = "Турбований"
}