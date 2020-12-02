import React, { useState, useEffect } from "react";
import { Table, Form , Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import API from '../utils/API';
import { useStoreContext } from "../utils/GlobalState";


function CartTable() {
    const [globalState, dispatch] = useStoreContext();
    console.log('cart file global globalState', globalState)

    const [state, setState] = useState({
        products: []
    })



    // PUT THIS IN A USE EFFECT!!!
    useEffect(() => {
        API.getCartItems(globalState.customerId).then(function(res) {
            console.log('get cart items api .then!!', res)
            setState({...state, products: res.data })
    }, [])
    
        // update local state with the data!!!! 
    })


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
                                        <th className="product-name" colspan="3">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* One Item Row in TABLE */}
                                    {state.products.map((item, i)=>{
                                    <tr key ={i} className="cart-item">
                                        <td className="product-remove">
                                            <a aria-label="Remove this item" className="remove" data-product-id="">X</a>
                                        </td>
                                        <td className="product-thumbnail">
                                    <a><img src={`../assets/Image/${item.img_url}`} className="thumbnail-img"></img></a>
                                        </td>
                                    <td className="product-name" data-title="Product"></td>
                                        <td className="product-price" data-title="Price">
                                    <span className="price-amount">$</span>
                                        </td>
                                        <td className="product-quantity" data-title="Quantity">
                                            <div className="quantity-buttons">
                                                {/* Subtract quantity button component goes here */}
                                                <input type="number" id="quantity" className="input-text quantity text" min="0" max="20" title="qty" size="4" inputMode="numeric"></input>
                                                {/* Add quantity button component goes here */}
                                                </div>
                                        </td>
                                        <td className="product-subtotal" data-title="Total">
                                                    <span className="product-amount amount">$</span>
                                                </td>
                                    </tr>
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
                                    <thead><h2>Cart Totals</h2></thead>
                                    </Card.Title>
                                    {/* Cart subtotal row */}
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td data-title="subtotal">
                                            <strong>
                                                <span className="subtotal-amount-display"></span>
                                            </strong>
                                        </td>
                                    </tr>
                                    {/* Cart shipping row */}
                                    <tr className="shipping cart-shipping-total">
                                        <th>Shipping</th>
                                        <td data-title="shipping-data">
                                            <strong>
                                                <span className="shipping-amount-display"></span>
                                            </strong>
                                        </td>
                                    </tr>
                                    {/* Cart total row */}
                                    <tr className="cart-total">
                                        <th>Total</th>
                                        <td data-title="total">
                                            <strong>
                                                <span className="total-amount-display"></span>
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