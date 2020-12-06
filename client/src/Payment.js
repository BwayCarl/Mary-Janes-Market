import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
// // import Cart from "./pages/cart";
// import Footer from "./components/Footer";

// Stripe Imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import ElementDemos from "./ElementDemos";
import CardForm from "./CardForm";
import FpxBankForm from "./FpxBankForm";
import IbanForm from "./IbanForm";
import IdealBankForm from "./IdealBankForm";
import PaymentRequestForm from "./PaymentRequestForm";
import SplitForm from "./SplitForm";

const stripePromise = loadStripe(
  "pk_test_51Hofl5LuJjLT1hU9eddiYJV7IDV6xKRCM1dWp1LgQALzX9Habzq26fjWx3gBS89qvMAvD7MVdiu3UD8rv2gURsJA00OIkacNMt"
);

const demos = [
  {
    path: "/card-element",
    label: "CardElement",
    component: CardForm,
  },
  {
    path: "/split-card-elements",
    label: "Split Card Elements",
    component: SplitForm,
  },
  {
    path: "/payment-request-button-element",
    label: "PaymentRequestButtonElement",
    component: PaymentRequestForm,
  },
  {
    path: "/ideal-bank-element",
    label: "IdealBankElement",
    component: IdealBankForm,
  },
  {
    path: "/iban-element",
    label: "IbanElement",
    component: IbanForm,
  },
  {
    path: "/fpx-bank-element",
    label: "FpxBankElement",
    component: FpxBankForm,
  },
];

const Payment = () => {
  return (
    <div className="App">
      <Header />

      <div>
        <Elements stripe={stripePromise}>
          <ElementDemos demos={demos} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
