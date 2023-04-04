import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductSection.css";
import API from '../utils/API';

function ProductSection(props) {

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

  useEffect(()=>{
    let tomato = [];
      if(props.tomato){
        state.products.forEach((product)=>{
          if(product.Category === "Heirloom Tomato"){
            tomato.push(product)
          } 
        })
        setState({ ...state, products: tomato})
        console.log("state from TOMATO", state.products)
      } else {
        API.getBoxes()
        .then(res => {
          setState({ ...state, products: res.data });
          console.log("state from TOMATO GET ALL", state.products)
        })
        .catch(err => {
          console.log(err)
        })
      }
  },[props.tomato])

  useEffect(()=>{
    let lettuce = [];
      if(props.lettuce){
        state.products.forEach((product)=>{
          if(product.Category === "Lettuce"){
            lettuce.push(product)
          } 
        })
        setState({ ...state, products: lettuce})
        console.log("state from LETTUCE", state.products)
      } else {
        API.getBoxes()
        .then(res => {
          setState({ ...state, products: res.data });
          console.log("state from LETTUCE GET ALL", state.products)
        })
        .catch(err => {
          console.log(err)
        })
      }
  },[props.lettuce])

  useEffect(()=>{
    let flowers = [];
      if(props.flowers){
        state.products.forEach((product)=>{
          if(product.Category === "Cutting Flowers"){
            flowers.push(product)
          } 
        })
        setState({ ...state, products: flowers})
        console.log("state from flowers", state.products)
      } else {
        API.getBoxes()
        .then(res => {
          setState({ ...state, products: res.data });
          console.log("state from flowers GET ALL", state.products)
        })
        .catch(err => {
          console.log(err)
        })
      }
  },[props.flowers])

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