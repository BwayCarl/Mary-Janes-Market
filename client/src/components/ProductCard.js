import React, { useEffect } from "react";
import "../styles/ProductCard.css"
import API from '../utils/API';
import { useStoreContext } from "../utils/GlobalState";
import { SET_CART_ID } from '../utils/Actions.js'

function ProductCard(props) {
  const [state, dispatch] = useStoreContext();

  useEffect(()=>{
    localStorage.getItem('cartID');
  }, [])

  useEffect(()=>{
    const cartID = Math.floor(Math.random() * 100000000000) + 1
    
    if (!localStorage.getItem("cartID")){
      //if cartID is not set in localstorage, then set it
      dispatch({
            id: cartID ,
            type: SET_CART_ID
          })
      localStorage.setItem("cartID", cartID)
      
    } else {
      //otherwise set global state with the existing cartID
      dispatch({
            id: localStorage.getItem("cartID"),
            type: SET_CART_ID
          })
    }
  }, [])

  function handleClick(e) {
    e.preventDefault();

    var newCart = {
      img_url: props.imgurl,
      name: props.name,
      price: props.price,
      category: 'Box Sets',
      customerId: localStorage.getItem('cartID'),
      quantity: 1,
      productId: props.id
    }

console.log("props", props)
    API.addToCart(newCart)
      .then(res => {
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
        <div className="card product-card" key={props.id} value={props.category}>
          <img className="card-img" src={`../assets/Image/${props.imgurl}`} alt={props.name}></img>
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="text-muted">{props.description}</p>
          </div>
          <div className="row card-footer justify-content-between align-items-center">
            <span className="col-5 p-2 text-left price">$ {props.price} / lb</span>
            <div className="col-7 p-2 text-right"><button key={props.id} price={props.price} imgurl={props.img_url} name={props.name} className="btn btn-outline-primary btn-sm rounded-lg addToCart" onClick={handleClick} >Add to Cart</button></div>
          </div>
        </div>

  )
}

export default ProductCard;