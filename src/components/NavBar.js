import React from "react";
import 'tachyons'
import './NavBar.css'

const NavBar = () => {
    return(
        <div className="db bg-dark-gray pa1 white">
            <ul>
                <li id="home">HOME</li>
                <li id="login">Login</li>
            </ul>
        </div>
    )
}

export default NavBar;