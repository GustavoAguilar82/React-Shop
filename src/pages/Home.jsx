import React from "react";
import { Header } from "../components/Header";
import { ProductList } from "../containers/ProductList";

const Home = ({category}) =>{
    return(
        <div>
        <Header/>
        <ProductList category={category}/>
        </div>
    );
}

export {Home}