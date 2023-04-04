import React, {useContext} from "react";
import {ShoppingCartItem} from '../components/ShoppingCartItem' 
import {AppContext} from '../context/AppContext'
import '../styles/ShoppingCart.scss';
import arrow from '@icons/flechita.svg';

const ShoppingCart = ({toggleShoppingCart, settoggleShoppingCart}) => {
    const {state} = useContext(AppContext);

    const sumaTotal = () => {const reducer = (acum, currentValue) => acum + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        console.log(state.cart)
        return sum;
        
    }

    return(
        <aside className="product-detail" id="shoppingCart">
            <div className="title-container">

                <figure className="arrow-go-back" 
                    onClick={() => settoggleShoppingCart(!toggleShoppingCart)}>
                    <img src={arrow} alt="go back"/> 
                </figure>            
                <p className="title">My order</p>
            </div>

            <div className="my-order-content">
                {state.cart.map((product, index) => (
                    <ShoppingCartItem product={product} indexValue={index} key={index}/>
                ))}
                <div className="order-Total-and-Bottom">
                    <div className="order">
                        <p>
                        <span>Total</span>
                        </p>
                        <p>${sumaTotal()}</p>
                    </div>
                    <button className="primary-button">
                        Checkout
                    </button>
                </div>
            </div>
        </aside>
        
    );
}

export { ShoppingCart }