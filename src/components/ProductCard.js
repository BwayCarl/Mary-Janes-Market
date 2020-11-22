import React from "react";
import "../styles/ProductCard.css"
function ProductCard() {
  return (
    <section className="row medium-unstack">
      <div className="column medium-4">
        <div className="card">
          <div className="card-section">
            <h4>This is a card.</h4>
            <img src="http://placehold.it/500x300" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eligendi ullam sint eum ut saepe optio ratione architecto perferendis, necessitatibus magni.</p>
          </div>
          <div className="card-divider"><button className="button expanded">Add to Cart</button></div>
        </div>
      </div>
      <div className="column medium-4">
        <div className="card">
          <div className="card-section">
            <h4>This is a card.</h4>
            <img src="http://placehold.it/500x300" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eligendi ullam sint eum ut saepe optio ratione architecto perferendis, necessitatibus magni.</p>
          </div>
          <div className="card-divider"><button className="button expanded">Add to Cart</button></div>
        </div>
      </div>
      <div className="column medium-4">
        <div className="card">
          <div className="card-section">
            <h4>This is a card.</h4>
            <img src="http://placehold.it/500x300" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eligendi ullam sint eum ut saepe optio ratione architecto perferendis, necessitatibus magni.</p>
          </div>
          <div className="card-divider"><button className="button expanded">Add to Cart</button></div>
        </div>
      </div>
    </section>


  );
}

export default ProductCard;