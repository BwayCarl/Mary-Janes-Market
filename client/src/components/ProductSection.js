import React, {useState, useEffect}  from "react";
import ProductCard from "./ProductCard";
import ProductIntro from "./ProductIntro"
import "../styles/ProductSection.css"
import API from '../utils/API';

function ProductSection() {

  const [state, setState] = useState({
    products: []
  })

  useEffect(() => {
    console.log('use effect!')
    API.getBoxes()
    .then(res => {
      console.log('res form api!!!!!',res)
      setState({products: res.data});
      console.log(state)
    })
    .catch(err =>{
      console.log(err)
    })
}, [])



console.log(' in product section state!!!', state)

  return (
    <section className="ProductSection">
      <p>ProductSection code will be here</p>
      <ProductIntro />
      {
        state.products.map((product) => {
          return(
                <ProductCard price={product.Price} imgUrl={product.Img_url} name={product.Name}/>
          )
        })
      }
    </section>
  );
}

export default ProductSection;