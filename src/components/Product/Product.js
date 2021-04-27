
import React from 'react';

import "./Product.css";


const Product = ({id,title,image,price,rating}) => {
    return (
        <div className="product" key={id}>

            <div className="product__info">

                <p>{title}</p>
                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>

                <div className="product__rating">
                    {Array(rating).fill().map(_=>(<p>⭐</p>))}
                </div>
            </div>
            

            <img src={image} alt="imageName"/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product
