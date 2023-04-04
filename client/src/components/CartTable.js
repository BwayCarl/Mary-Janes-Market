import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import API from '../utils/API';
import CartItem from './CartItem'
import '../styles/CartTable.css';
import { useHistory } from "react-router-dom";



function CartTable() {
    let history = useHistory();
    // User's Customer Id to associate CART through out entire site
    //const [globalState, dispatch] = useStoreContext();

    // Carts totals to be updated depending on whats in CART
    const [stateCartTotal, setCartTotal] = useState({
        total: 0.00
    })

    // User's selected products in CART
    const [state, setState] = useState({
        products: [],
        quantity: 1,
    })

    // PUT THIS IN A USE EFFECT!!!
    useEffect(() => {
        var cartID = localStorage.getItem("cartID");
        console.log("cartId in cart table", cartID)
        API.getCartItems(cartID)
            .then(function (res) {
                console.log("resssssssss", res.data)
                // Setting the array of products in the CART
                let products;

                if(res.data.length == 0){
                    console.log("nothing in the cart", res.data)
                    products = [];
                    setState({ ...state, products: products })
                } else if(res.data[0].products.length > 1){
                    console.log("theres a cart", res.data[0].products)
                    products = res.data[0].products.length;
                    setState({ ...state, products: products })
                }
                
            })
        }, [])

    // This useEffect updates the totals ONLY when the array of products in the cart is updated.
    useEffect(() => {
        var cartTotal = 0
        var productTotal = 0

        // Adding totals of everything in Cart
        for (var i = 0; i < state.products.length; i++) {
            console.log(state.products[i].Price)
            productTotal += parseInt(state.products[i].Price)
    
        }
        setCartTotal({ ...cartTotal, total: productTotal })
    


    }, [state.products])

    const handleQuantity = (itemId, customerId, quantity) => {
// console.log("itemId", itemId)
// console.log("customerId", customerId)
// console.log("quantity", quantity)

            API.updateProductQuantity(customerId, itemId, parseInt(quantity))
            .then((res) => {
                console.log(res.data, "Update Quantity HIT");
                var cartID = localStorage.getItem("cartID");
                API.getCartItems(cartID)
                // window.location.reload()
                    .then(function (res) {
                        // Setting the array of products in the CART
                        setState({ ...state, products: res.data })
                        setCartTotal({ ...stateCartTotal, total: stateCartTotal.total })

                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    // Handles GRAND TOTAL of all products in Cart
    const handleGrandTotal = (oldQuantity, newQuantity, total) => {

// console.log("oldQuantity", oldQuantity)
// console.log("newQuantity", newQuantity)
// console.log("total", total)

        if (oldQuantity > newQuantity) {
            var multiplier = oldQuantity - newQuantity
            var whatToSubtract = total * multiplier
            setCartTotal({ ...stateCartTotal, total: parseFloat(stateCartTotal.total - whatToSubtract) })

        } else {
            var multiplier = newQuantity - oldQuantity
            var whatToAdd = total * multiplier
            console.log("parseFloat", parseFloat(stateCartTotal.total + whatToAdd))
            setCartTotal({ ...stateCartTotal, total: parseFloat(stateCartTotal.total + whatToAdd) })

        }
        // console.log('ABOUT TO UPDATE!!  quantity', oldQuantity, 'newQuantity', newQuantity, 'new price coming in to addd!!!!', total)
    }


    const handleRemove = (_id, customerId) => {
console.log("id and customer id", _id, customerId)
        API.deleteBox(_id, customerId)
        .then((res) => {
                console.log(res, "DELETE BUTTON HIT");
                var cartID = localStorage.getItem("cartID");
                API.getCartItems(cartID)
                    .then(function (res) {
                        let products = res.data[0].products || [];

                        console.log("products after delete", products)
                        setState({ ...state, products: products })
                        setCartTotal({ ...stateCartTotal, total: stateCartTotal.total })

                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const goToPayment = () => {
        history.push(`/payment/${stateCartTotal.total}`);
    }

    const products = state.products || [];
    console.log("products", products)
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
                                            {products.map((item, i) => {
                                                return (
                                                    <CartItem key={i} handleQuantity={handleQuantity} handleGrandTotal={handleGrandTotal} handleRemove={handleRemove} item={item} />
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
                                    <div className="cart-sidebar col-inner">
                                    <div className="cart-totals">
                                        <Table>
                                            <tbody>
                                                <Card.Title>
                                                    <thead>Cart Totals</thead>
                                                </Card.Title>
                                                {/* Cart subtotal row */}
                                                {/* <tr className="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td data-title="subtotal">
                                                        <strong>
                                                            <span className="subtotal-amount-display">${stateCartTotal.total}</span>
                                                        </strong>
                                                    </td>
                                                </tr> */}
                                                {/* Cart total row */}
                                                <tr className="cart-total">
                                                    <th>Total</th>
                                                    <td data-title="total">
                                                        <strong>
                                                            <span className="total-amount-display">${stateCartTotal.total}</span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                                {/* PROCEED TO CHECKOUT BUTTON COMPONENT HERE */}
                                                <button className="btn btn-outline-primary rounded-lg" onClick={() => goToPayment()}>Proceed to Checkout!</button>
                                            </tbody>
                                        </Table>
                                    </div>
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