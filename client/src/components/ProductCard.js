import React from "react";
import "../styles/ProductCard.css"
import API from '../utils/API';
import { useStoreContext } from "../utils/GlobalState";




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
      category: 'sativa',
      customerId: state.customerId
    }
    console.log("This item added to cart", newCart)

    API.addToCart(newCart)
    .then(res => {
      console.log('res from add to cart api', res)
    })
    .catch(err =>{
      console.log(err)
    }) 
  }
    


  return( 

      
        
          <div className="mx-auto card col-12 col-lg-4" key={props.id}>
            <img className="card-img" src={`../assets/Image/${props.imgUrl}`} alt={props.name}></img>
            <div className="card-body">  
              <h4 className="card-title">{props.name}</h4>
              <p className="text-muted">Need to put some descriptions into the database for each of these 3 boxes.</p>
            </div>  
            <div className="row card-footer justify-content-between align-items-center">
              <span className="col-5 p-2 text-left price">$ {props.price}</span>
              <div className="col-7 p-2 text-right"><button key={props.id} price={props.Price} imgUrl={props.Img_url} name={props.Name} className="btn btn-outline-primary btn-sm rounded-lg addToCart" onClick={handleClick} >Add to Cart</button></div>
            </div>            
          </div>
  )
}

export default ProductCard;