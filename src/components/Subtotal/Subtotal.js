
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../../contextAPI/StateProvider"

import "./Subtotal.css"
const [{basket},dispatch]=useStateValue()

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={value=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items)
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
                value={0}
            />
            
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
