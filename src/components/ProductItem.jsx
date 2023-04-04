import React, {useContext, useState} from "react";
import '../styles/ProductItem.scss';
import {AppContext} from '../context/AppContext'
import addToCartImage from '@icons/bt_add_to_cart.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';


const ProductItem = ({product}) => {
    
    const { addToCart } = useContext(AppContext);

    const handleClick = item => {
        item.inShoppingCart = true;
        addToCart(item);
    }
    return(
        <div className="product-card">
            <img src={product.images?.[0]} alt={product.title}/>
            <div className="product-info">
            <div>
                <p>${product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product)}> 
                {product.inShoppingCart ? <img src={shoppingCartIcon} alt=""/> : <img src={addToCartImage} alt=""/> }     
            </figure>
            </div>
        </div>
    );
}
export { ProductItem}