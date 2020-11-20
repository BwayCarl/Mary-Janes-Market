import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
};
