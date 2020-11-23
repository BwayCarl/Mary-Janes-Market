import React, {useState, useEffect} from "react";
import "../styles/ProductCard.css"
import API from '../utils/API';


function ProductCard() {
  const [products, setProducts] = useState({
    Name: '',
    Price: '',
    ImgUrl: ''
  })

  useEffect(() => {
    API.getBoxes()
    .then(res => {
      console.log(res)
      setProducts({
        Name: res.data,
        Price: res.data,
        ImgUrl: res.data
      });
    })
    .catch(err =>{
      console.log(err)
    })
}, [])


  return( 
      <section className="row medium-unstack">
        <div className="column medium-4">
  {/* {data.map((product, i) => { */}
  {/* return ( */}
          <div className="card">
            {/* <div className="card-section">
              <h4>{product.Name}</h4>
              <img src={product.Img_url} alt={product.Name} />
              <p>${product.Price}</p>
            </div>
            <div className="card-divider"><button className="button expanded">Add to Cart</button></div> */}
          </div>
          {/* ) */}
      {/* })
    } */}
        </div>
      </section>
  )
}

export default ProductCard;