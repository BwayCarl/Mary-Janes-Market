// Stripe Imports
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";

import CheckoutForm from "./CardElement";
import React from "react";

// const InjectedCheckoutForm = () => {
//   return (
//     <ElementsConsumer>
//       {({ elements, stripe }) => (
//         <CheckoutForm elements={elements} stripe={stripe} />
//       )}
//     </ElementsConsumer>
//   );
// };

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
  return (
    <div>
      <Elements stripe={stripePromise}>
        <InjectedCheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
