import React from "react";



function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light scrolling-navbar">
            <a className="navbar-brand" href="/"></a>
            <div className="collapse navbar-collapse scrolling-navbar" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link home" href="/">Home</a>
                    <a className="nav-item nav-link cart" href="/cart">Cart</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;