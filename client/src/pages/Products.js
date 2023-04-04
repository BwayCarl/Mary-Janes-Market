import React from "react";
import ProductSection from "../components/ProductSection";
import "../styles/About.css";

function Products() {
    return (
        <header className="">
            <h2 className="text-center">Our Products</h2>
            <section className=" mx-auto mb-5 container">        
                    <ProductSection/>
            </section>
        </header>
    );
}

export default Products;