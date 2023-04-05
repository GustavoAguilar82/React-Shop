import React from "react"
import '../styles/MyAccount.scss'

const MyAccount = () =>{
    return (
    <div class="MyAccount">
        <div class="MyAccount-container">
        <h1 class="title">My account</h1>
        <form action="/" class="form">
            <div>
            <label for="name" class="label">Name</label>
            <p class="value">Gustavo Aguilar</p>
        
            <label for="email" class="label">Email</label>
            <p class="value">gustavo@aguilar.com</p>
        
            <label for="password" class="label">Password</label>
            <p class="value">*********</p>
            </div>
            <input type="submit" value="Edit" class="secondary-button login-button"/>
        </form>
        </div>
    </div>);
}
export { MyAccount }