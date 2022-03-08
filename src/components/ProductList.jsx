import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({products, favorite, remove, loading}) => {
    if (!loading) {
        return (
            <div className="loader">
                <span></span>
            </div>
        )
    }

    if (!products.length && loading) {
        return (
            <h1>
                Нет товаров!
            </h1>
        )
    }

    return (
        <div className="container">
            {products.map((product) =>
                <ProductItem favorite={favorite} remove={remove} product={product} key={product.id}/>
            )}
        </div>
    );
};

export default ProductList;
