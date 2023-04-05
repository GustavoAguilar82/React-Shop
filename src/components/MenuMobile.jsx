import React from "react";
import '../styles/MenuMobile.scss'

const MenuMobile = () => {
    return(
        <div class="mobile-menu">
        <ul>
          <li>
            <a href="/">CATEGORIES</a>
          </li>
          <li>
            <a onClick={() => {window.location.href="/"}}>All</a>
          </li>
          <li>
            <a onClick={() => {window.location.href="/clothes"}}>Clothes</a>
          </li>
          <li>
            <a onClick={() => {window.location.href="/electronics"}}>Electronics</a>
          </li>
          <li>
            <a onClick={() => {window.location.href="/furniture"}}>Furniture</a>
          </li>
          <li>
            <a onClick={() => {window.location.href="/shoes"}}>Shoes</a>
          </li>
          <li>
            <a onClick={() => {window.location.href="/others"}}>Others</a>
          </li>
        </ul>
    
        <ul>
          <li>
            <a onClick={() => {window.location.href="/my-account"}}>My Account</a>
          </li>
          <li>
            <a onClick={() => {window.location.href="/my-orders-history"}}>My Orders</a>
          </li>
        </ul>
    
        <ul>
          <li>
            <p>gustavo@aguilar.com</p>
          </li>
          <li>
            <a href="/" class="sign-out">Sign out</a>
          </li>
        </ul>
      </div>
    );
};
export {MenuMobile}