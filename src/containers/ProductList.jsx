import React from "react";
import '../styles/ProductList.scss';
import { ProductItem } from "../components/ProductItem";
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';
import { useGetProducts } from "../hooks/useGetProducts";

let API = 'https://api.escuelajs.co/api/v1/products';  

const ProductList = ({category}) => {
 
  switch (category) {
    case "clothes-1":
      API = 'https://api.escuelajs.co/api/v1/products/?categoryId=1'
      break;
    case "electronics-2":
      API = 'https://api.escuelajs.co/api/v1/products/?categoryId=2'
      break;
    case "furniture-3":
      API = 'https://api.escuelajs.co/api/v1/products/?categoryId=3'
      break;
    case "shoes-4":
      API = 'https://api.escuelajs.co/api/v1/products/?categoryId=4'
      break;
    case "others-5":
      API = 'https://api.escuelajs.co/api/v1/products/?categoryId=5'
      break;
    default:
      API = 'https://api.escuelajs.co/api/v1/products';
      break;
  }

  const products = useGetProducts(API);

  return(
      <section className="main-container">
      <div className="cards-container">   
        <div className="product-card">
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          <div className="product-info">
            <div>
              <p>$120,00</p>
              <p>no from API </p>
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