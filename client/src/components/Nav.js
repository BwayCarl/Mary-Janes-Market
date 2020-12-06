import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light scrolling-navbar">
      <div
        className="collapse navbar-collapse scrolling-navbar justify-content-center"
        id="navbarNavAltMarkup"
      >
        <NavLink className="nav-item nav-link home" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item nav-link cart" to="/cart">
          Cart
        </NavLink>

      </div>
    </nav>
  );
}

export default Nav;
