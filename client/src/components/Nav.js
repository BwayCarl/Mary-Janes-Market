import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import API from '../utils/API';

function Nav() {

  return (
    <nav className="navbar navbar-expand-sm justify-content-center mt-3 mb-3">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink></li>
          {/* <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About Us
          </NavLink></li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/services">
            Our Services
          </NavLink></li> */}
          <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink></li>
          {/* <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact Us
          </NavLink></li> */}
          <li className="nav-item">
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink></li>
        </ul>
    </nav>
  );
}

export default Nav;
