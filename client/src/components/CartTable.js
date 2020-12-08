// import PaymentButton from "./PaymentButton";
import React, { useState, useEffect } from "react";
import { Table, Form, Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import API from "../utils/API";
import CartItem from "./CartItem";
import { useStoreContext } from "../utils/GlobalState";

// Import Stripe Payment Button
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Hofl5LuJjLT1hU9eddiYJV7IDV6xKRCM1dWp1LgQALzX9Habzq26fjWx3gBS89qvMAvD7MVdiu3UD8rv2gURsJA00OIkacNMt"
);

function PaymentButton() {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}

function CartTable() {
  // User's Customer Id to associate CART through out entire site
  const [globalState, dispatch] = useStoreContext();

  // Carts totals to be updated depending on whats in CART
  const [stateCartTotal, setCartTotal] = useState({
    total: 0,
  });

  // User's selected products in CART
  const [state, setState] = useState({
    products: [],
  });

  // function populateStorage(){
  //     localStorage.setItem('Cart Id', JSON.stringify(globalState))
  // }

  // function getStorage(){
  //     localStorage.getItem(JSON.parse("Cart Id"))

  // }

  // PUT THIS IN A USE EFFECT!!!
  useEffect(() => {
    // populateStorage();
    API.getCartItems(globalState.customerId).then(function (res) {
      // Setting the array of products in the CART
      setState({ ...state, products: res.data });
      console.log("state products use effect", state.products);
    });
  }, []);

  // This useEffect updates the totals ONLY when the array of products in the cart is updated.
  useEffect(() => {
    var cartTotal = 0;
    var productTotal = 0;

    // Adding totals of everything in Cart
    for (var i = 0; i < state.products.length; i++) {
      productTotal += parseInt(state.products[i].price);
    }
    setCartTotal({ ...cartTotal, total: productTotal });
  }, [state.products]);

  // Handles GRAND TOTAL of all products in Cart
  const handleGrandTotal = (oldQuantity, newQuantity, total) => {
    if (oldQuantity > newQuantity) {
      console.log("TIE TO SUBTRACT");
      var multiplier = oldQuantity - newQuantity;
      var whatToSubtract = total * multiplier;
      setCartTotal({
        ...stateCartTotal,
        total: stateCartTotal.total - whatToSubtract,
      });
    } else {
      var multiplier = newQuantity - oldQuantity;
      var whatToAdd = total * multiplier;
      setCartTotal({
        ...stateCartTotal,
        total: stateCartTotal.total + whatToAdd,
      });
    }
    console.log(
      "ABOUT TO UPDATE!!  quantity",
      oldQuantity,
      "newQuantity",
      newQuantity,
      "new price coming in to addd!!!!",
      total
    );
  };

  console.log("CART TOTAL IN CART FILE!!!!! GRAND RTOTAL!!!!", stateCartTotal);

  const handleRemove = (id) => {
    API.deleteBox({
      url: "/api/deleteFromCart/" + id,
      method: "DELETE",
    }).then((res) => {
      console.log(res, "DELETE BUTTON HIT");
    });
  };
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
                        <th className="product-name" colSpan="3">
                          Product
                        </th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* One Item Row in TABLE */}
                      {state.products.map((item, i) => {
                        return (
                          <CartItem
                            handleGrandTotal={handleGrandTotal}
                            handleRemove={handleRemove}
                            item={item}
                          />
                        );
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
                              <span className="subtotal-amount-display">
                                ${stateCartTotal.total}
                              </span>
                            </strong>
                          </td>
                        </tr>
                        {/* Cart shipping row */}
                        <tr className="shipping cart-shipping-total">
                          <th>Shipping</th>
                          <td data-title="shipping-data">
                            <strong>
                              <span className="shipping-amount-display">
                                Flat Rate $10
                              </span>
                            </strong>
                          </td>
                        </tr>
                        {/* Cart total row */}
                        <tr className="cart-total">
                          <th>Total</th>
                          <td data-title="total">
                            <strong>
                              <span className="total-amount-display">
                                ${stateCartTotal.total + 10}
                              </span>
                            </strong>
                          </td>
                        </tr>
                        {/* PROCEED TO CHECKOUT BUTTON COMPONENT HERE */}{" "}
                        <PaymentButton />
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

