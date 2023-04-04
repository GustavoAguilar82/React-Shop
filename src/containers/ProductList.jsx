import React from "react";
import '../styles/ProductList.scss';
import { ProductItem } from "../components/ProductItem";
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';
import { useGetProducts } from "../hooks/useGetProducts";

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const products = useGetProducts(API);

    return(
        <section className="main-container">
        <div className="cards-container">   
          <div className="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <div className="product-info">
              <div>
                <p>$120,00</p>
                <p>Hola</p>
              </div>
              <figure>
                <img src={shoppingCartIcon} alt=""/>
              </figure>
            </div>
          </div>
          {products.map( (product) => (<ProductItem product={product} key={product.id} inShoppingCart={product.inShoppingCart}></ProductItem>))}
        </div>
      </section>
    )
}
export { ProductList}