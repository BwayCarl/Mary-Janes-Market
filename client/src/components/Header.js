import React from "react";
import "../styles/Header.css"
import Nav from "./Nav"

function Header() {
  return (
    
    <header className="header">
      <img className="logo" width="50px" src="./assets/Image/logoPic.png" alt="logo"></img>
      <span className="wordmark pl-3">Mary Jane's Market</span>
      <div>
      <Nav />
      </div>
    </header>
  );
}

export default Header;