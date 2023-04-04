import React from "react";
import "../styles/Jumbotron.css"

function Jumbotron() {
  return (
    // <section className="hero mb-5">      
    //     <h1 className="hero-text">Experience the Garden State</h1>
    // </section>

    <div id="carouselExampleFade" className="carousel slide carousel-fade hero mb-5" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../assets/Image/greenhouse.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../assets/Image/ProducePic.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../assets/Image/PlantsPic.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../assets/Image/GardenInstallationPic.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../assets/Image/PantryItemsPic.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../assets/Image/Catering.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
  );
}

export default Jumbotron;