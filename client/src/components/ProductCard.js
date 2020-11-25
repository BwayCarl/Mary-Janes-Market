import React from "react";
import "../styles/ProductCard.css"


function ProductCard(props) {
 
  console.log('props is the produc card!', props)

  return( 

      <section className="row medium-unstack">
        <div className="column lg-12">
          <div className="card">
            <div className="card-section">
              <h4>{props.name}</h4>
              <img src={'https://i.insider.com/59e5d4a1b0c292755836e078?width=600&format=jpeg&auto=webp'} alt={props.name}></img>
              <p>${props.price}</p>
            </div>
            <div className="card-divider"><button className="button expanded">Add to Cart</button></div>
          </div>
        </div>
      </section>
  )
}

export default ProductCard;