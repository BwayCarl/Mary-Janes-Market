import React from "react";
import { BrowserRouter as Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light scrolling-navbar">
            <a className="navbar-brand" href="/"></a>
            <div className="collapse navbar-collapse scrolling-navbar" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link home" to="/">Home</Link>
                    <Link className="nav-item nav-link cart" to="/cart">Cart</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;