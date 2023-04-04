import '../styles/Contact.css'
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import API from '../utils/API';
import React, {useState, useEffect, useRef} from "react";
import emailjs from '@emailjs/browser';

export default function Payment() {
  let location = useLocation();
  let total= location.pathname.slice(9);
  const form = useRef();
  const [totalState, setTotalState] = useState(total)
  const [state, setState] = useState({
    products: [],
    finalCart: []
})

useEffect(() => {
    var cartID = localStorage.getItem("cartID");
    API.getCartItems(cartID)
        .then(function (res) {
            // Setting the array of products in the CART
            //console.log("res", res.data[0].products)
            setState({ ...state, products: res.data[0].products})
        })
}, [])

//     // function sendEmail(e) {
//     //     e.preventDefault();

//     //     emailjs.sendForm('service_e3af47d', 'template_mdy7m22', e.target, 'user_1GDvO9fR6f3uZRQAb1tX1')
//     //         .then((result) => {
//     //             console.log(result.text);
//     //         }, (error) => {
//     //             console.log(error.text);
//     //         });
//     //     e.target.reset()
//     // }

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gsubq8v', form.current, 'user_pqHnzMPwJyjHNYwuZgwiR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
    alert("Your message has been sent!")
    localStorage.removeItem("cartID");
};
    

    return (
        <div>
            <div className="container email-container email-bg-pic">
                <header className="education email-header">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="email-title text-center">Thank you for shopping with us!</h2>
                            <h5 className="pmt-amt text-center">Total payment due: $ {totalState}.00</h5>
                            <h5 className="email-subheader text-center">Your order will be available for pickup after Chris contacts you</h5>
                            {/* <h5 className="email-subheader text-center">Drop us a line and we'll get back to you as soon as possible.</h5> */}
                        </div>
                    </div>
                </header>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control email-window" placeholder="Name" name="name" />
                        </div>
                    
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control email-window" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control email-window" placeholder="Phone Number" name="phone-number" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto TEXT">
                            <input type="text" name='message' defaultValue={state.products.map((item, i) => {
            return (`\n
                {\n
                Name: ${item.Name}, \n
                Price: $${item.Price}, \n
                Quantity: ${item.quantity}, \n
                Item: ${i + 1}/${state.products.length}
                }`
            )
        })
        
    }></input>
    <input type="text" name='total' defaultValue={totalState} ></input>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="submit" className="btn btn-email-send" value="Complete Purchase"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
    }

//import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   ElementsConsumer,
// } from "@stripe/react-stripe-js";
// import {
//   BrowserRouter as Router,
//   Switch,
//   useLocation
// } from "react-router-dom";
// import '../styles/2-Card-Detailed.css';

            {/* <div className="form-control email-window" type="text" id="" cols="30" rows="8" name="message"></div> */}


// import CheckoutForm from "./CardOptions.js";
// import React, {useState} from "react";

// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#000",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       ":-webkit-autofill": { color: "#000" },
//       "::placeholder": { color: "#87bbfd" },
//     },
//     invalid: {
//       iconColor: "#000",
//       color: "#000",
//     },
//   },
// };

// const CardField = ({ onChange }) => (
//   <fieldset className="FormGroup">
//     <div className="FormRow">
//       <CardElement options={CARD_OPTIONS} onChange={onChange} />
//     </div>
//   </fieldset>
// );

// const InjectedCheckoutForm = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// const stripePromise = loadStripe(
//   "pk_test_51Hofl5LuJjLT1hU9eddiYJV7IDV6xKRCM1dWp1LgQALzX9Habzq26fjWx3gBS89qvMAvD7MVdiu3UD8rv2gURsJA00OIkacNMt"
// );

// const Payment = () => {
//   let location = useLocation();
//   let total= location.pathname.slice(9);
//   const [totalState, setTotalState] = useState(total)

//   return (
//     <div className="stripe-container">
      
//       <Elements stripe={stripePromise}>
//         <p className="pmt-amt">Total payment due: $ {totalState}.00</p>
//       <p className="pmt-subhead text-muted">Please enter your credit card information below:</p>
//         <InjectedCheckoutForm />
//       </Elements>
//     </div>
//   );
// };
