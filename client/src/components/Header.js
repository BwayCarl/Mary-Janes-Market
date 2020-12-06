import React from "react";
import "../styles/Header.css"
import Nav from "./Nav"
import Auth from "./Auth"

function Header() {
  return (
    
    <header className="header">
      <div className="row">
        <div className="col ml-1">
          <img className="logo" width="50px" src="./assets/Image/logoPic.png" alt="logo"></img>
          <span className="wordmark pl-3">Mary Jane's Market</span>
        </div>
          <Auth />
      </div>
      <Nav />
    </header>
  );
}

export default Header;