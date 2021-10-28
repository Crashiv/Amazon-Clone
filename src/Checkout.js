import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import checkoutImg from "./checkout__ad.jpg"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src={checkoutImg}/>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>
                            You have no items in your basket.To buy one or more items,click "Add to basket" next
                            to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List of all check out product */}
                        {basket?.map(item => (
                            <CheckoutProduct
                                key={item.key}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
