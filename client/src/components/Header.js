import React from "react";
import "../styles/Header.css"
import Nav from "./Nav"

function Header() {
  return (
    
    <header className="header">
      <img className="logo" src="https://via.placeholder.com/40x40"></img>
      <span className="wordmark pl-3">Mary Jane's Market</span>
      <div>
      <Nav />
      </div>
    </header>
  );
}

export default Header;