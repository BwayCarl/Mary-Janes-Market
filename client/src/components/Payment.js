// Stripe Imports
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import '../styles/2-Card-Detailed.css';



import CheckoutForm from "./CardOptions.js";
import React, {useState} from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#000",
      color: "#000",
    },
  },
};

const CardField = ({ onChange }) => (
  <fieldset className="FormGroup">
    <div className="FormRow">
      <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
  </fieldset>
);

const InjectedCheckoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

const stripePromise = loadStripe(
  "pk_test_51Hofl5LuJjLT1hU9eddiYJV7IDV6xKRCM1dWp1LgQALzX9Habzq26fjWx3gBS89qvMAvD7MVdiu3UD8rv2gURsJA00OIkacNMt"
);

const Payment = () => {
  let location = useLocation();
  let total= location.pathname.slice(9);
  const [totalState, setTotalState] = useState(total)

  return (
    <div className="stripe-container">
      
      <Elements stripe={stripePromise}>
        <p className="pmt-amt">Total payment due: $ {totalState}.00</p>
      <p className="pmt-subhead text-muted">Please enter your credit card information below:</p>
        <InjectedCheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
