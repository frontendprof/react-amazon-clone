
import React from 'react';
import { useStateValue } from '../../contextAPI/StateProvider';

import "./Product.css";


const Product = ({id,title,image,price,rating}) => {

    const [{basket},dispatch]=useStateValue();


    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{id,title,image,price,rating}
        })
    }

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
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
