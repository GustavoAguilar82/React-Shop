import React from "react"
import '../styles/Menu.scss'

const Menu = () => {
    return(
        <div className="desktop-menu">
            <ul>
            <li>
                <a onClick={() => {window.location.href="/my-account"}}>My Account</a>
            </li>
            <li>
                <a onClick={() => {window.location.href="/my-orders-history"}}>My Orders</a>
            </li>
            <li>
                <a href="/">Sign out</a>
            </li>
            </ul>
        </div>
    )
    
}

export {Menu}

