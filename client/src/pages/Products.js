import React from "react";
import ProductFilter from "../components/productFilter";
import ProductSection from "../components/ProductSection";
import "../styles/About.css";

function Products() {
    return (
        <header className="">
            <h2 className="text-center">Our Products</h2>
            <section className=" mx-auto mb-5 container">        
                    <ProductFilter />
            </section>
        </header>
    );
}

export default Products;