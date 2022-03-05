import React from "react";
import {IoMdHeartEmpty, IoMdHeart, IoIosClose} from "react-icons/io";

import MyButton from "./UI/button/MyButton";

const ProductItem = ({product, favorite, remove}) => {
    return (
        <div className="card__item">
            <MyButton className="card__like" onClick={() => favorite(product)}>
                {product.favorite
                    ? <IoMdHeart/>
                    : <IoMdHeartEmpty/>
                }
            </MyButton>

            <MyButton className="card__del" onClick={() => remove(product)}>
                <IoIosClose/>
            </MyButton>

            <div className="card__item-image">
                <img src={product.image} alt={product.title}/>
            </div>

            <div className="card__item-content">
                <div className="card__item-title">{product.title}</div>
                <div className="card__item-description">{product.description}</div>
                <div className="card__item-price">от <span>{product.price}</span> ₽</div>
            </div>
        </div>
    );
};

export default ProductItem;
