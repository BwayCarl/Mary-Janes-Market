import React from "react";
import "../styles/Footer.css"

function Footer() {
  return (
    <footer>
      {/* top half of footer with links */}
      <div className="footer-info footerrow justify-content-between text-center py-4">
        <div className="col-sm-6 col-md-3 footercol">
          <h5>Mary Jane's Market</h5>
          <p>Since 2020, we've been helping New Jerseyans easily and discretely enjoy legal marijuana. </p>
        </div>
        <div className="col-sm-6 col-md-3 footercol">
          <h5>Hot Links</h5>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 mb-3 footercol">
          <h5>More Info</h5>
          <ul>
            <li>How it works</li>
            <li>About us</li>
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
          <p className="small text-muted">&copy;2020 Mary Janes's Market</p>
        </div>
        <div className="col-sm-12 col-md-6 text-right">
          <i class="fab fa-twitter mr-3"></i> 
          <i class="fab fa-facebook-f mr-3"></i> 
          <i class="fab fa-instagram"></i>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;