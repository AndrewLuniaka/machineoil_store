import React from 'react';
import './Products.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext, {ContextData} from '../Context';
import {Link} from "react-router-dom";
import {OilaceaClassification, OilapiClassification, OilCapacity, OilEngineType, OililsacClassification, OilOliveBaseType, OilSaeViscosity, ProductItem, ProductItemCollection, ProductItemCollectionGrid} from "../shareData";

function ProductCard(props: CardProps) {

    const context = React.useContext(AppContext) as ContextData;

    return (
        <div className="col-md-4">
            <Link to={"/" + props.card.categoryId + "/" + props.card.productId} className="flex-fill h-100 w-100 link-dark">
                <div className="card">
                    <img src={props.card.imgUrl ? props.card.imgUrl : "defaultImg.jpg"} className="card-img-top img-fluid oil-card"
                         alt="..."/>
                    <div className="card-body text-center oil-card-body">
                        <p className="card-text">{props.card.title}</p>
                        <p className="card-text fs-4">Ціна {props.card.price} ₴</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function CheckFilter(props: FilterProps) {
    return (
        props.filterValue != "" ?
            <li key={props.index} className="list-group-item">
                <Checkbox index={props.index} filterValue={props.filterValue} changeFunction={props.changeFunction}/>
            </li> :
            null
    );
}

function Checkbox(filterProps: FilterProps) {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (e: string) => {

        setChecked(!checked);
        filterProps.changeFunction(!checked, e);
    };

    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id={filterProps.filterValue} name={filterProps.filterValue} value={filterProps.filterValue} onChange={e => handleChange(e.target.value)}/>
            <label className="form-check-label">{filterProps.filterValue}</label>
        </div>
    );

};

type ProductProps =
    {
        category: string;
        items: ProductItemCollection;
    }

type CardProps =
    {
        card: ProductItem;
    }

type FilterProps = {
    index: number;
    filterValue: string;
    changeFunction(isChecked: boolean, filter: string): void;
}

function Products(props: ProductProps) {

    const [grid, setGrid] = React.useState<ProductItemCollectionGrid>({} as ProductItemCollectionGrid);
    const [isLoading, setLoading] = React.useState(true);
    const [saeViscosityFilter, setSaeViscosityFilter] = React.useState(new Set<string>());
    const [capacityFilter, setCapacityFilter] = React.useState(new Set<string>());

    let filterSaeViscosity = (isChecked: boolean, filter: string) => {
        let tmpSet = new Set<string>(saeViscosityFilter);

        if (isChecked) {
            tmpSet.add(filter);
        } else {
            tmpSet.delete(filter);
        }
        setSaeViscosityFilter(tmpSet);
    };

    let filterCapacity = (isChecked: boolean, filter: string) => {
        let tmpSet = new Set<string>(capacityFilter);

        if (isChecked) {
            tmpSet.add(filter);
        } else {
            tmpSet.delete(filter);
        }
        setCapacityFilter(tmpSet);
    };

    function chunkArray(myArray: ProductItem[], chunk_size: number) {
        // Creating the clone of the array
        let cloneArr = myArray.slice(0);
        let results: ProductItem[][] = [];

        while (cloneArr.length) {
            results.push(cloneArr.splice(0, chunk_size));
        }

        return results;
    }

    React.useEffect(() => {
        setLoading(true);

        let categoryElements: ProductItem[] = props.items.products.filter(x => x.categoryId === props.category);
        let result: ProductItem[][] = chunkArray(categoryElements, 3);
        let itemsGrid = new ProductItemCollectionGrid(result);

        setGrid(itemsGrid);
        setLoading(false);
    }, [props]);

    React.useEffect(() => {

        function FilterProduct(item: ProductItem, category: string): boolean {

            let canApplyFilter = item.categoryId === category;

            if (saeViscosityFilter?.size > 0) {
                canApplyFilter &&= saeViscosityFilter.has(item.saeViscosity);
            }

            if (capacityFilter?.size > 0) {
                canApplyFilter &&= capacityFilter.has(item.capacity);
            }

            return canApplyFilter;
        }

        let categoryElements: ProductItem[] = props.items.products.filter(x => FilterProduct(x, props.category));
        let result: ProductItem[][] = chunkArray(categoryElements, 3);
        let itemsGrid = new ProductItemCollectionGrid(result);

        setGrid(itemsGrid);

    }, [saeViscosityFilter, capacityFilter]);


    return (
        <main className="container mt-3 mb-3">
            <div className="row">
                <div className="col-md-2">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                    В'язкість по SAE
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        {Object.values(OilSaeViscosity).map((key, index) => <CheckFilter index={index} filterValue={key} changeFunction={filterSaeViscosity}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Ємність, л
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        {Object.values(OilCapacity).map((key, index) => <CheckFilter index={index} filterValue={key} changeFunction={filterCapacity}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Класифікація API
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        {Object.values(OilapiClassification).map((key, index) => <CheckFilter index={index} filterValue={key} changeFunction={() => {
                                        }}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Класифікація ACEA
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        {Object.values(OilaceaClassification).map((key, index) => <CheckFilter index={index} filterValue={key} changeFunction={() => {
                                        }}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                    Класифікація ILSAC
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        {Object.values(OililsacClassification).map((key, index) => <CheckFilter index={index} filterValue={key} changeFunction={() => {
                                        }}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                    Тип двигуна
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        {Object.values(OilEngineType).map((key, index) => <CheckFilter index={index} filterValue={key} changeFunction={() => {
                                        }}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                                    Тип основи оливи
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        {Object.values(OilOliveBaseType).map((key, index) => <CheckFilter index={index} filterValue={key} changeFunction={() => {
                                        }}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-10">
                    {isLoading ?
                        null :
                        grid.productsGrid.map((product, index) =>
                            <div key={index} className="row mb-3">
                                {product.map((item, indexj) => <ProductCard key={indexj} card={item}/>)}
                            </div>)
                    }
                </div>
            </div>
        </main>
    );
}

export default Products;
