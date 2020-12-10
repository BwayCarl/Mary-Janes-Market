import React, {useState, useEffect}  from "react";
import ProductCard from "./ProductCard";
import ProductIntro from "./ProductIntro";
import "../styles/ProductSection.css";
import API from '../utils/API';

function ProductSection() {

  const [state, setState] = useState({
    products: []
  })

  useEffect(() => {
    API.getBoxes()
    .then(res => {
      setState({products: res.data});
    })
    .catch(err =>{
      console.log(err)
    })
}, [])





  return (
    <section className="ProductSection mx-auto mb-5">
      <ProductIntro />
      <section className="card-deck">
      {
        state.products.map((product) => {
          return(
                <ProductCard price={product.Price} imgUrl={product.Img_url} name={product.Name} description={product.Description}/>
          )
        })
      }
      </section>
    </section>
  );
}

export default ProductSection;