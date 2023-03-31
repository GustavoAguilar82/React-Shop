import React, {useContext} from "react";
import { AppContext} from "../context/AppContext";
import close from '@icons/icon_close.png'


const ShoppingCartItem = ({product, indexValue}) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index)
  }
  
  return ( 
      <div class="shopping-cart">
      <figure>
        <img src={product.images[0]} alt="bike"/>
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img class="closeImage" src={close} alt="close" onClick={() => handleRemove(indexValue)}/>
    </div>
  );
}
export {ShoppingCartItem}