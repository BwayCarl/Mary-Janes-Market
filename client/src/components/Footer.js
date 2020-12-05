import React from "react";
import "../styles/Footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-info row justify-content-between text-center p-5">
        <div className="col-sm-6 col-md-3 mb-3">
          <h5>Mary Jane's Market</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        </div>
        <div className="col-sm-6 col-md-3 mb-3 mx-auto">
          <h5>Hot Links</h5>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <h5>More Info</h5>
          <ul>
            <li>How it works</li>
            <li>About us</li>
            <li>Decline rules</li>
            <li>T and C</li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 mb-3">
          <h5>Customer Care</h5>
          <ul>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Discount system</li>
          </ul>
        </div>
      </div>
      <div className="row mt-3 px-5 py-2">
        <div className="col-sm-12 col-md-6 text-left">
          <p>&copy;2020 Mary Janes's Market</p>
        </div>
        <div className="col-sm-12 col-md-6 text-right">
          social icons
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;