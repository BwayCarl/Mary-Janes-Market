import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {

  return (
    <nav className="navbar navbar-expand-sm justify-content-center mt-3">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink></li>
           <li className="nav-item">
          <NavLink className="nav-link" to="/education">
            Education
          </NavLink></li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact Us
          </NavLink></li>
           <li className="nav-item">
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink></li>
        </ul>
    </nav>
  );
}

export default Nav;
