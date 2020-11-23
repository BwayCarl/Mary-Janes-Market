import React from "react";
import Jumbotron from "../components/Jumbotron"
import ProductSection from "./ProductSection";
import AgeModal from "../components/AgeModal"
import "../styles/Main.css"

function Main() {
  return (
    <main className="main">
        <p>Main section</p>
      <AgeModal />
      <Jumbotron />
      <ProductSection />
    </main>
  );
}

export default Main;