import React from "react";
import "../styles/ProductCard.css"
import API from '../utils/API';
import { useStoreContext } from "../utils/GlobalState";


var cartID = localStorage.getItem('cartID');


function ProductCard(props) {
    // Global State to add customerId to new Cart
  const [state, dispatch] = useStoreContext();


  function handleClick(e) {
    e.preventDefault();
    console.log('Add To Cart clicked', props);

    var newCart ={
      img_url: props.imgUrl,
      name: props.name,
      price: props.price,
      category: 'Box Sets',
      customerId: cartID
    }
    console.log("This item added to cart", newCart)
    console.log(newCart.customerId)

    API.addToCart(newCart)
    .then(res => {
      console.log('res from add to cart api', res)
    })
    .catch(err =>{
      console.log(err)
    }) 
  }
    


  return( 

      
        
          <div className="product-card card" key={props.id}>
            <img className="card-img" src={`../assets/Image/${props.imgUrl}`} alt={props.name}></img>
            <div className="card-body">  
              <h4 className="card-title">{props.name}</h4>
              <p className="text-muted">{props.description}</p>
            </div>  
            <div className="row card-footer justify-content-between align-items-center">
              <span className="col-5 p-2 text-left price">$ {props.price}</span>
              <div className="col-7 p-2 text-right"><button key={props.id} price={props.price} imgUrl={props.img_url} name={props.name} className="btn btn-outline-primary btn-sm rounded-lg addToCart" onClick={handleClick} >Add to Cart</button></div>
            </div>            
          </div>
  )
}

export default ProductCard;