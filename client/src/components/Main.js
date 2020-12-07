import React from "react";
import Jumbotron from "./Jumbotron";
import ProductSection from "./ProductSection";
import AgeModal from "./AgeModal";
import "../styles/Main.css";


function Main() {

  return (
    <main className="main">

      <AgeModal />
      <Jumbotron />
      <ProductSection />
    </main>
  );
}

export default Main;
