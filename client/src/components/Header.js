import React from "react";
import "../styles/Header.css";
import Nav from "./Nav"

function Header() {
  return (
    <header className="header container-fluid">
      <div className="row">
        <div className="col-md-12">
          <img className="logo text-center" src="../assets/Image/horizontalLogo.jpg" alt="logo"></img>
        </div>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
