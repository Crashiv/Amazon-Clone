import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider";
function CheckoutProduct({key,id, title, image, rating, price }) {
    const[{basket},dispatch]=useStateValue();
    console.log(key);
    const removeFrombasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
        
    };
    return (
        <div key={key} className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="Checkoutproduct__">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))

                    }
                </div>
                <button onClick={removeFrombasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
