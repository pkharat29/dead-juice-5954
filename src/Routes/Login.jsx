// import React from 'react'

// function Login() {
//   return (
//      <div></div>
//   )
// }

// export default Login
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

             <Link to='/'><div className="login-btn" onClick={popup}>Login</div></Link>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>

        </div>
    )
}

export default LoginForm