import React from "react";
import "../styles/ProductIntro.css"
import { NavLink } from "react-router-dom";

function ProductIntro() {
  return (
    <div>
    <section className="ProductIntro mx-auto mb-5">
      <h2 className="intro-title">Our Practices</h2>
      <p className="large-para py-3">At Hay Mumford Farms we have a collection of principles that we apply for good farm production processes in order to get better agriculture products:</p>
<ul className="text-center mb-3 mx-auto">
    <li>Sustainable farming</li>
    <li>No-till soil preparation</li>
    <li>Sowing seed direct when possible</li>
    <li>Compost/Manuring</li>
    <li>Drip-irrigation</li>
    <li>Weeding</li>
    <li>Integrated Pest Management</li>
</ul>
<NavLink className="btn-outline-primary btn rounded-lg btn-lg addToCart" to="/about">Learn More</NavLink>
    </section>

<section className="ProductIntro mx-auto mb-5">
<h2 className="intro-title">Our Mission</h2>
<p className="large-para py-3">
Our mission at Hay Mumford Farms is to share our passion of growing and producing good and organic food. We like to grow out-of-the-ordinary varieties of plants each spring, summer and fall. We grow lots of different types plants that we sell in the spring, and produce food from in our two farm locations in the summer. We would like to bring awareness to all potential gardeners to grow organically! We would like to inspire households to start a compost pile in their back yards too! We love to teach and influence everyone to source and learn where their food is grown, whether it is produce or livestock!
</p>

<NavLink className="btn-outline-primary btn rounded-lg btn-lg addToCart" to="/about">About Us</NavLink>
</section>
</div>
  );
}

export default ProductIntro;