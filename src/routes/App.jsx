import React from "react";
import {BrowserRouter, Routes ,Route } from 'react-router-dom'
import { Layout } from "../containers/Layout";
import { noLogin } from "../containers/NoLogin";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { NewPassword } from "../pages/NewPassword";
import { SentEmail } from "../pages/SentEmail";
import { Login } from "../pages/Login";
import { CreateAccount } from "../pages/CreateAccount";
import { MyAccount } from "../pages/MyAccount";
import { MyOrderBuyed } from "../pages/MyOrderBuyed";
import { MyOrderBuyedItem } from "../components/MyOrderBuyedItem";
import { OrdersHistory } from "../pages/OrdersHistory";
import { ProductDetail } from "../containers/ProductDetail";
import { ShoppingCart } from "../containers/ShoppingCart";
import { ShoppingCartItem } from "../components/ShoppingCartItem"; 
import '../styles/global.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/new-password" element={<NewPassword/>} />
                    <Route exact path="/sent-email" element={<SentEmail/>} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/create-account" element={<CreateAccount />} />
                    <Route exact path="/my-account" element={<MyAccount />} />
                    <Route exact path="my-order-buyed" element= {<MyOrderBuyed> <MyOrderBuyedItem></MyOrderBuyedItem> </MyOrderBuyed>} />
                    <Route exact path="my-orders-history" element= {<OrdersHistory></OrdersHistory>}/>
                    <Route exact path="product-details" element={<ProductDetail></ProductDetail>} />
                    <Route exact path="shopping-cart" element={<ShoppingCart> <ShoppingCartItem> </ShoppingCartItem></ShoppingCart>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export {App}
