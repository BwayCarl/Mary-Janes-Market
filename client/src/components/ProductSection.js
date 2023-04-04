import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductSection.css";
import API from '../utils/API';

function ProductSection() {

  const [state, setState] = useState({
    products: []
  })

  useEffect(() => {
    API.getBoxes()
      .then(res => {
        setState({ products: res.data });
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <div className="container">
        <div className="row card-deck row-cols-1 row-cols-md-3 g-4 mt-5">
        {
          state.products.map((product, i) => {
            return (
                <div className="col mb-3">
                  <ProductCard key={i} id={product._id} price={product.Price} imgurl={product.Img_url} name={product.Name} description={product.Description} category={product.Category} />
                </div>
            )
          })
        }
        </div>
      </div>

    </div>
  );
}

export default ProductSection;