import React, {useContext} from "react";
import {ShoppingCartItem} from '../components/ShoppingCartItem' 
import {AppContext} from '../context/AppContext'
import '../styles/ShoppingCart.scss';
import arrow from '@icons/flechita.svg';

const ShoppingCart = () => {
    const {state} = useContext(AppContext);
    
    const sumaTotal = () => {const reducer = (acum, currentValue) => acum + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }


    return(
        <aside class="product-detail">
            <div class="title-container">
                <img src={arrow} alt="arrow"/>
                <p class="title">My order</p>
            </div>

            <div class="my-order-content">
                {state.cart.map((product, index) => (
                    <ShoppingCartItem product={product} indexValue={index} key={index}/>
                ))}




                <div class="order">
                    <p>
                    <span>Total</span>
                    </p>
                    <p>${sumaTotal()}</p>
                </div>
                <button class="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
        
    );
}

export { ShoppingCart }