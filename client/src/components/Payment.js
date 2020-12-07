// // Stripe Imports
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   ElementsConsumer,
// } from "@stripe/react-stripe-js";

// import CheckoutForm from "./CardForm";

// const InjectedCheckoutForm = () => {
//   return (
//     <ElementsConsumer>
//       {({ elements, stripe }) => (
//         <CheckoutForm elements={elements} stripe={stripe} />
//       )}
//     </ElementsConsumer>
//   );
// };

// const stripePromise = loadStripe(
//   "pk_test_51Hofl5LuJjLT1hU9eddiYJV7IDV6xKRCM1dWp1LgQALzX9Habzq26fjWx3gBS89qvMAvD7MVdiu3UD8rv2gURsJA00OIkacNMt"
// );

// const _Payment = () => {
//   return (
//     <div>
//       <Elements stripe={stripePromise}>
//         <InjectedCheckoutForm />
//       </Elements>
//     </div>
//   );
// };

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
