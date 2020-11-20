import React from "react";
import ProductCard from "./ProductCard";
import ProductIntro from "./ProductIntro"

function ProductSection() {
  return (
    <section className="ProductSection">
      <p>ProductSection code will be here</p>
      <ProductIntro />
      <ProductCard />
    </section>
  );
}

export default ProductSection;