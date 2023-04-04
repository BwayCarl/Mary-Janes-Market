import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* top half of footer with links */}
      <div className="footer-info footerrow justify-content-between text-center py-4">
        <div className="col-sm-6 col-md-3 footercol">
          <h5>Hay Mumford</h5>
          <p>
            Since 2020, we've been helping New Jerseyans easily have access to organically grown produce and chef-cooked meals.{" "}
          </p>
        </div>
        <div className="col-sm-6 col-md-3 footercol">
          <h5>Hot Links</h5>
          <ul>
            <li><NavLink className="footer-link" to='/'>Home</NavLink></li>
            <li><NavLink className="footer-link" to='/education'>Our Services</NavLink></li>
            <li><NavLink className="footer-link" to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 mb-3 footercol">
          <h5>More Info</h5>
          <ul>
            <li>How it works</li>
            <li><NavLink className="footer-link" to='/about'>About Us</NavLink></li>
            <li>Terms &amp; Conditions</li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 mb-3 footercol">
          <h5>Customer Care</h5>
          <ul>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>

      {/* bottom row of footer */}
      <div className="footerrow mt-3 py-2">
        <div className="col-sm-12 col-md-6 text-left">
          <p className="small text-muted">&copy;2023 Hay Mumford</p>
        </div>
        <div className="col-sm-12 col-md-6 text-right">
          <a href="https://www.facebook.com/search/top?q=hay%20mumford%20farm%20%26%20farm%20store"><i className="fab fa-facebook-f mr-3"></i></a>
          <a href="https://www.instagram.com/haymumfordfarm/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
