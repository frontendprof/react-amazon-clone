
import React from 'react'

import "./CheckoutProduct.css"
import { useStateValue } from '../../contextAPI/StateProvider'


const CheckoutProduct = ({item,title,image,price,rating}) => {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:item
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt={title} className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">

                <p className="checkoutProduct__title">{title}</p>

                <div className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>

                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=><p key={i}>🌟</p>)}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
