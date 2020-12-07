import React, { useState, useEffect } from "react";
import { Table, Form , Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import API from '../utils/API';
import { useStoreContext } from "../utils/GlobalState";


function CartTable() {
    const [globalState, dispatch] = useStoreContext();
    // console.log('cart file global globalState', globalState)

    const [newProductTotal, setNewProductTotal] = useState(0)
    
    const [state, setState] = useState({
        products: [],
    })

    // function populateStorage(){
    //     localStorage.setItem('Cart Id', JSON.stringify(globalState))
    // }

    // function getStorage(){
    //     localStorage.getItem(JSON.parse("Cart Id"))
        
    // }
    

    // PUT THIS IN A USE EFFECT!!!
    useEffect(() => {
        // populateStorage();
        API.getCartItems(globalState.customerId)
            .then(function(res) {
                // console.log('get cart items api .then!!', res)
                setState({...state, products: res.data })
                console.log("state products use effect",state.products)
            })

    }, [])

    useEffect(() => {
        //update totals
    
    }, [state.products])
    

    // };
    let newCart = [state];
    // newCart = hardCopy.filter((item) => item._id !== state.products._id);
    console.log(newCart)
    const removeItem = (event, item) => {
        console.log(item, 'checking item')
        
      
        
    }


    function handleQuantity(event, item){



        for(var i = 0; i < state.products.length; i ++) {

            // console.log(state.products[i]._id, 'product Id')

            var itemId = item._id;
            // console.log(itemId, "item Id")

        // (itemId === state.products[i]._id){

            var quantityVal = event.target.value

            var productPrice = item.price;

        
            var itemTotal = quantityVal * parseInt(productPrice)
            setNewProductTotal({...newProductTotal, itemTotal});
        // console.log(item, "inside HANDLE QUANTITY")
        // }
    }
}

    console.log(newProductTotal);





    // Adding totals of everything in Cart
    var productTotal = 0;
    var cartTotal = 0;
    
    for(var i = 0; i < state.products.length; i ++) {
        productTotal += parseInt(newProductTotal.itemTotal)
        var subTotal = productTotal;
        console.log(subTotal, 'inside for loop ')
        console.log(state.products[i], 'state.products inside for loop ')



        cartTotal = subTotal + 10
        subTotal = productTotal;
        console.log(cartTotal, "Total of products in cart")
        console.log(subTotal, "subtotal of products in cart")
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
                                            <button aria-label="Remove this item" onClick={(event) => removeItem(event, item)} data-remove={item._id} className="remove" data-product-id="">X</button>
                                            
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
                                                
                                                <select id="quantity" onChange={(event) => handleQuantity(event, item)} key={i}>
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
                                        <span className="product-amount amount">${productTotal}</span>
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
                                                <span className="total-amount-display">${cartTotal}</span>
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