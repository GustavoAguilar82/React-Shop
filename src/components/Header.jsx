import React, { useState, useContext} from "react";
import '@styles/Header.scss'
import { Menu } from "@components/Menu";
import { MenuMobile } from "./MenuMobile";
import { ShoppingCart } from "../containers/ShoppingCart";
import { AppContext } from "../context/AppContext";
//direciones
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleShoppingCart, settoggleShoppingCart] = useState(false);
    const [isVisibleMobileMenu, setisVisibleMobileMenu] = useState(false);
    const {state} = useContext(AppContext);
    
    const myShoppingCart = document.getElementById("shoppingCart")

    function closeMenus(){
        setToggle(false);
        settoggleShoppingCart(false);
        setisVisibleMobileMenu(false);
    }
    const handleToggle = () => {
        closeMenus();
        setToggle(!toggle);
    };

    function handletoggleShoppingCart() {
        closeMenus();
        settoggleShoppingCart(!toggleShoppingCart);
    };

    const handleMobileMenu = () => {
        closeMenus();
        setisVisibleMobileMenu(!isVisibleMobileMenu);
    };

    return (
        <nav>
            {isVisibleMobileMenu && <MenuMobile/>}
            <div className="navbar-left ul" onClick={handleMobileMenu}>
                <img src={menu} alt="menu" className="menu" />
            </div>
            

            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>   
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}> 
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={handletoggleShoppingCart}>
                        <img src={shoppingCartIcon} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            {}
            
            {toggle && <Menu/>}
            {toggleShoppingCart && 
                <ShoppingCart toggleShoppingCart={toggleShoppingCart} 
                              settoggleShoppingCart={settoggleShoppingCart}>
                </ShoppingCart>}
        </nav>
    )
}

export {Header}