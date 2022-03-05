import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({products, favorite, remove}) => {
    console.warn("ProductList", products);

    if(!products.length) {
        return (
            <h1>
                Нет туров!
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
