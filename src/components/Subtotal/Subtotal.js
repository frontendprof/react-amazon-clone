
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../contextAPI/reducer';
import { useStateValue } from "../../contextAPI/StateProvider"

import "./Subtotal.css"


const Subtotal = () => {
    const [{basket},dispatch]=useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={value=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                prefix={"$"}
                thousandSeparator={true}
                decimalScale={2}
                displayType={"text"}
                value={getBasketTotal(basket)}
            />
            
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
