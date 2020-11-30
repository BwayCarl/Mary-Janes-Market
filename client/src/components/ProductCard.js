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

      <section className="row medium-unstack">
        <div className="column lg-12">
          <div className="card" key={props.id}>
            <div className="card-section">
              <h4>{props.name}</h4>
              <img src={`../assets/Image/${props.imgUrl}`} alt={props.name}></img>
              <p>${props.price}</p>
            </div>
            <div className="card-divider"><button key={props.id} price={props.Price} imgUrl={props.Img_url} name={props.Name} className="button expanded addToCart" onClick={handleClick} >Add to Cart</button></div>
          </div>
        </div>
      </section>
  )
}

export default ProductCard;