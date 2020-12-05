import React from "react";
import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light scrolling-navbar">
            <a className="navbar-brand" href="/"></a>
            <div className="collapse navbar-collapse scrolling-navbar" id="navbarNavAltMarkup">
                    <NavLink className="nav-item nav-link home" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link cart" to="/cart">Cart</NavLink>
            </div>
        </nav>
    );
}

export default Nav;