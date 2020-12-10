import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import API from '../utils/API';
import CartItem from './CartItem'
import { useStoreContext } from "../utils/GlobalState";
import '../styles/CartTable.css';
import { useHistory } from "react-router-dom";



function CartTable() {
    let history = useHistory();
    // User's Customer Id to associate CART through out entire site
    const [globalState, dispatch] = useStoreContext();
    
    // Carts totals to be updated depending on whats in CART
    const [stateCartTotal, setCartTotal] = useState({
        total: 0
    })

    // User's selected products in CART
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
        var cartID=localStorage.getItem("cartID");
        // populateStorage();
        API.getCartItems(cartID)
            .then(function (res) {
                // Setting the array of products in the CART
                setState({ ...state, products: res.data })
                console.log("state products use effect", state.products)
            })
    }, [])

    // This useEffect updates the totals ONLY when the array of products in the cart is updated.
    useEffect(() => {

        var cartTotal = 0
        var productTotal = 0

        // Adding totals of everything in Cart
        for (var i = 0; i < state.products.length; i++) {
            productTotal += parseInt(state.products[i].price)

        }
        setCartTotal({ ...cartTotal, total: productTotal })
    }, [state.products])

    // Handles GRAND TOTAL of all products in Cart
    const handleGrandTotal = (oldQuantity, newQuantity, total) => {

        if (oldQuantity > newQuantity) {
            console.log('TIME TO SUBTRACT')
            var multiplier = oldQuantity - newQuantity
            var whatToSubtract = total * multiplier
            setCartTotal({ ...stateCartTotal, total: stateCartTotal.total - whatToSubtract })

        } else {
            console.log('TIME TO ADD')
            var multiplier = newQuantity - oldQuantity
            var whatToAdd = total * multiplier
            setCartTotal({ ...stateCartTotal, total: stateCartTotal.total + whatToAdd })

        }
        // console.log('ABOUT TO UPDATE!!  quantity', oldQuantity, 'newQuantity', newQuantity, 'new price coming in to addd!!!!', total)
    }
    console.log(stateCartTotal.total, "handlegrand total")

    console.log('CART TOTAL IN CART FILE!!!!! GRAND TOTAL!!!!', state)

    const handleRemove = ( _id, customerId) => {
        
        console.log(_id ,'delete button hit');
        API.deleteBox(_id, customerId)
        .then((res) => {
            console.log(res.data, "DELETE BUTTON HIT");
            API.getCartItems(globalState.customerId)
            .then(function (res) {
                // Setting the array of products in the CART
                setState({ ...state, products: res.data })
                console.log("state products use effect", state.products)
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const goToPayment = () => {
        console.log("clicked!")
        history.push(`/payment/${stateCartTotal.total + 10}`);

    }
    return (
        <Container>
            <div className="cart-wrapper my-5">
                <Row className="row-divided">
                    {/* Cart CONTENTS FORM and TABLE */}
                    <Col size="lg-8 pb-0">
                        <div className="cart-contents-wrapper">
                            <div className="cart-form">
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
                                            {state.products.map((item, i) => {
                                                return (
                                                    <CartItem handleGrandTotal={handleGrandTotal} handleRemove={handleRemove} item={item} />
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
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
                                                            <span className="subtotal-amount-display">${stateCartTotal.total}</span>
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
                                                            <span className="total-amount-display">${stateCartTotal.total + 10}</span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                {/* PROCEED TO CHECKOUT BUTTON COMPONENT HERE */}
                                                <button className="btn btn-outline-primary rounded-lg" onClick={() => goToPayment()}>Proceed to Checkout!</button>
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