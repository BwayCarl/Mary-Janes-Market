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



import CheckoutForm from "./CardOptions.js";
import React, {useState} from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
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
    <div className="container">
      ${totalState}
      <Elements stripe={stripePromise}>
        <InjectedCheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
