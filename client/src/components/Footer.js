import React from "react";
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer ">
      <div className="row">
        <div className="columns small-6 large-3">
          <h5>Mary Jane's Market</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        </div>
        <div className="columns small-6 large-3">
          <h5>Hot Links</h5>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="columns small-6 large-3">
          <h5>More Info</h5>
          <ul>
            <li>How it works</li>
            <li>About us</li>
            <li>Decline rules</li>
            <li>T and C</li>
          </ul>
        </div>
        <div className="columns small-6 large-3">
          <h5>Customer Care</h5>
          <ul>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Discount system</li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;