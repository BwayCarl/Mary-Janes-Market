import React, { useState, useEffect } from "react";
import { Table, Form , Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import API from '../utils/API';
import { useStoreContext } from "../utils/GlobalState";


function CartTable() {
    const [globalState, dispatch] = useStoreContext();
    console.log('cart file global globalState', globalState)

    const [newProductTotal, setNewProductTotal] = useState(0)

    const [state, setState] = useState({
        products: [],
    })

    function populateStorage(){
        localStorage.setItem('Cart Id', JSON.stringify(globalState))
    }

    function getStorage(){
        localStorage.getItem(JSON.parse("Cart Id"))
        
    }
    

    // PUT THIS IN A USE EFFECT!!!
    useEffect(() => {
        populateStorage();
        API.getCartItems(globalState.customerId)
            .then(function(res) {
                console.log('get cart items api .then!!', res)
                setState({...state, products: res.data })
                console.log("state products use effect",state.products)
                
            })

    }, [])

    useEffect(() => {
        //update totals
    
    }, [state.products])
    

        // // logic to remove
        //     for (let i = state.products.length - 1; i >= 0; --i) {
        //         if (state.products[i]._id === removeId) state.products.splice(i, 1);
        //     }
        //     setState(state.products);
            // localStorage.setItem("cart", JSON.stringify(items));
    // };
    

    // var = 1 ;
    // for(var i = 0; i < state.products.length; i ++) {
    //     var productPrice = parseInt(state.products[i].price)
    //     var productTotal = productQuantity * productPrice;
    //     console.log(productTotal, "quantity product")
    // }


    function handleQuantity(){
        var quantityVal = document.getElementById('quantity').value;

    for(var i = 0; i < state.products.length; i ++) {
        var itemTotal = quantityVal * parseInt(state.products[i].price)
    }
    setNewProductTotal({ ...newProductTotal, itemTotal });
    }

    console.log(newProductTotal.itemTotal);





    // Adding totals of everything in Cart
    var Total = 0;
    var subTotal = 0;
    var total = 0;
    
    for(var i = 0; i < state.products.length; i ++) {
        total += parseInt(newProductTotal.itemTotal)
        subTotal = total;
        console.log(total, 'inside for loop ')
        console.log(state.products[i], 'state.products inside for loop ')

    if (!state.products[i]){
        // subTotal = 0;
        // var Total = 0;
    }
    else { Total = newProductTotal.itemTotal + 10}
}

    return (
        <Container>
        <div className="cart-wrapper">
            <Row className="row-divided">
                {/* Cart CONTENTS FORM and TABLE */}
                <Col size="lg-8 pb-0">
                    <div className="cart-contents-wrapper">
                    <Form className="cart-form">
                        <div className="cart-wrapper sm-touch-scroll">
                            <Table className="cart-table-contents">
                                <thead>
                                    <tr>
                                        <th className="product-name" colSpan="3">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* One Item Row in TABLE */}
                                    {state.products.map((item, i)=>{
                                        return(
                                    <tr key={i} className="cart-item">
                                        <td className="product-remove">
                                            <button aria-label="Remove this item" data-remove={item._id} className="remove" data-product-id="">X</button>
                                            
                                        </td>
                                        <td className="product-thumbnail">
                                            <a><img src={`../assets/Image/${item.img_url}`} className="thumbnail-img"></img></a>
                                        </td>
                                        <td className="product-name" data-title="Product">{item.name}</td>
                                        <td className="product-price" data-title="Price">
                                            <span className="price-amount">${item.price}</span>
                                        </td>
                                        <td className="product-quantity" data-title="Quantity">
                                                {/* Subtract quantity button component goes here */}
                                                
                                                <select id="quantity" onChange={handleQuantity} data-id={item._id}  data-automation="quantity-select">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                                {/* Add quantity button component goes here */}
                                        
                                        </td>
                                        <td className="product-subtotal" data-title="Total">
                                        <span className="product-amount amount">${newProductTotal.itemTotal}</span>
                                                </td>
                                    </tr>
                                    )
                                            })}
                                </tbody>
                            </Table>
                        </div>
                    </Form>
                {/* UPDATE CART BUTTON COMPONENT WILL GO HERE */}
                </div>
                </Col>

                <Col size="lg-4">
                    {/* Cart Totals Side Card TABLE */}
                    <Card>
                        <Card.Body>
                    <div className="cart-collaterals">
                        <div className="cart-sidebar col-inner"></div>
                        <div className="cart-totals">
                            <Table>
                                <tbody>
                                    <Card.Title>
                                    <thead>Cart Totals</thead>
                                    </Card.Title>
                                    {/* Cart subtotal row */}
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td data-title="subtotal">
                                            <strong>
                                                <span className="subtotal-amount-display">${subTotal}</span>
                                            </strong>
                                        </td>
                                    </tr>
                                    {/* Cart shipping row */}
                                    <tr className="shipping cart-shipping-total">
                                        <th>Shipping</th>
                                        <td data-title="shipping-data">
                                            <strong>
                                                <span className="shipping-amount-display">Flat Rate $10</span>
                                            </strong>
                                        </td>
                                    </tr>
                                    {/* Cart total row */}
                                    <tr className="cart-total">
                                        <th>Total</th>
                                        <td data-title="total">
                                            <strong>
                                                <span className="total-amount-display">${Total}</span>
                                            </strong>
                                        </td>
                                    </tr>
                                    {/* PROCEED TO CHECKOUT BUTTON COMPONENT HERE */}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
        </Container>



    );
}

export default CartTable;