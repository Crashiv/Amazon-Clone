import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import checkoutImg from "./checkout__ad.jpg"
function Checkout() {
    const [{basket}]= useStateValue();
    return (
        <div className="checkout">
        <img 
        className="checkout__ad"
        src={checkoutImg}
        />
        {basket?.length===0?(
            <div>
                <h2>Your Shopping Basket is Empty</h2>
            </div>
        ):(
            <div>
            <h2>Your Shopping Basket</h2>
            </div>
        )}
        </div>
    )
}

export default Checkout
cd 