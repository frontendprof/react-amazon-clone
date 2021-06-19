
import React from 'react'
import { useStateValue } from '../../contextAPI/StateProvider'
import adsImg from "../../images/adsImg.jpg"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import "./Checkout.css"

const Checkout = () => {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
            <img
             src={adsImg} alt="" className="checkout__ad" />
             {(basket?.length===0)?(
                 <div>
                     <h2>Your Shopping Basket is Empty</h2>
                     <p>You have no items in your basket. To buy one or more items, click
                         "Add To Basket" next to the item.
                     </p>
                 </div>
             ):(
                 <div>
                     <h2 className="checkout__title">Your Shopping Basket</h2>

                     {basket.map(item=>(
                         <CheckoutProduct 
                            key={item.title}
                            item={item.id} 
                            title={item.title} 
                            image={item.image} 
                            price={item.price}
                            rating={item.rating}
                        />
                     ))}
                 </div>
             )
            }
        </div>
    )
}

export default Checkout
