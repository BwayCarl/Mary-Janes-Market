require("dotenv").config();
const mongoose = require("mongoose");
const Box = require("./models/box.js");
const Cart = require("./models/cart.js");
const express = require("express");
const logger = require("morgan");
const { resolve } = require("path");

const app = express();

// Stripe Testing

const stripe = require("stripe")(
  "sk_test_51Hofl5LuJjLT1hU9K35PNWBYDEI3f9dlRjUp3ZhzKdUilS4mzhQcCOp7NNucoOa1RjznrKRNyrsPkrYyoUWk1T5l00RT4QaBem"
);

// Added WebHook Security
const endpointSecret = "whsec_3eMRxQE8fiibazKKKBzs4mNDJx6ONc1p";

app.use(express.static("."));
app.use(express.json());

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("cors")());
app.listen(4000, () => {
  console.log("App running on port 4000!");
});


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MaryJaneMarket",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }

);

const passport = require("./config/passport");
const session = require("express-session");

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log("User: ", req.user);
  next();
});

app.get("/auth", (req, res) => {
  res.json(req.user);
});

app.get("/auth/facebook", passport.authenticate("facebook")); //this syntax is different than his
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    // console.log(Object.keys(req));
    // console.log(req.user);
    res.redirect("http://localhost:3000");
  }
);

// GET Box Sets from Database to homepage
app.get("/api/boxes", (req, res) => {
  console.log("hit the route!!");
  Box.find({}, (error, data) => {
    // console.log(data, "/all stuff we got from DB");
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// POST for Box Sets to be added to Cart collection in database
app.post("/api/addToCart", (req, res) => {
  console.log("hit the ADD TO CART server API");
  Cart.create(req.body).then((error, data) => {
    console.log(data, "stuff we added to Cart");
    if (error) {
      res.send(error);
    } else {
      console.log("THIS IS what we got back when we saved", data, error);
      console.log("hit the else! out to res!!!!");
      res.json(data);
    }
  });
});

// GET for Cart contents based upon the customerId assigned from modal
app.get("/api/findCart/:id", (req, res) => {
  console.log("find card!!! route!!", req.params);
  Cart.find({ customerId: req.params.id }, (error, data) => {
    console.log(data, "stuff we added to Cart associated with customerId");
    if (error) {
      res.send(error);
    } else {
      console.log("hit the else! out to res.json!!!!");
      res.json(data);
    }
  });
});

app.post("/api/newCart", (req, res) => {
  console.log("hit the NEW CART server API");
  Cart.create(req.body).then((error, data) => {
    if (error) {
      res.send(error);
    } else {
      console.log("NEW EMPTY CART DATA", data);
      res.json(data);
    }
  });
});

app.delete('/api/deleteFromCart/:id', (req, res) => {
  console.log('DELETE PRODUCT FROM CART ROUTE HIT', req.body)
  Cart.deleteOne({_id: req.params.id}, (err ,data) =>{
    if (err){
      res.send(err);
    }
    else {
      console.log({data})
      res.json(data);
    }
  })
})

// Manny's latest Stripe Testing

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys

// const session = await stripe.checkout.sessions.create({
//   submit_type: "donate",
//   payment_method_types: ["card"],
//   line_items: [
//     {
//       price: "{{PRICE_ID}}",
//       quantity: 1,
//     },
//   ],
//   mode: "payment",
//   success_url: "https://example.com/success",
//   cancel_url: "https://example.com/cancel",
// });

//Testing Checkout Session
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require("body-parser");

const fulfillOrder = (session) => {
  // TODO: fill me in
  console.log("Fulfilling order", session);
};

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (request, response) => {
    const payload = request.body;
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
);

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: "usd",
//   // Verify your integration in this guide by including this parameter
//   metadata: { integration_check: "accept_a_payment" },
// });

// // Handle the checkout.session.completed event
// if (event.type === "checkout.session.completed") {
//   const session = event.data.object;

//   // Fulfill the purchase...
//   fulfillOrder(session);
// }

// app.post("/create-checkout-session", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: "T-shirt",
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: "https://example.com/success",
//     cancel_url: "https://example.com/cancel",
//   });

//   res.json({ id: session.id });
 
// });
