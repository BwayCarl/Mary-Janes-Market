require("dotenv").config();
const mongoose = require("mongoose");
const Box = require("./models/box.js");
const Cart = require("./models/cart.js");
const express = require("express");
const logger = require("morgan");

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


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.use(express.static("public"));

app.use(require("cors")());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("App running on port 4000!");
});

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MaryJaneMarket", { useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false });
  };

  run().catch(error => console.error(error));

const passport = require("./config/passport");
const session = require("express-session");

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  // console.log("User: ", req.user);
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
  Box.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.put("/api/updateCart/:id", function(req, res) {
  console.log("req.params", req.params)
  console.log("req.body", req.body)
  console.log("update amount", req.body.quantity)
  Cart.findOne({customerId: req.params.id})
  .then((dbCartData) => {
    if (!dbCartData) {
      return res.status(404).json({ message: 'No Cart with this id!' });
    }

    for(var i = 0; i < dbCartData.products.length; i++){
      let itemToUpdate = dbCartData.products[i]._id.toString()

      if(itemToUpdate == req.body.boxId.toString()){
        dbCartData.products[i].quantity = req.body.quantity
        console.log("update quantity", dbCartData.products[i] )

          Box.findOneAndUpdate(
  { _id: dbCartData.products[i] },
  { $set: { quantity: req.body.quantity } })
  .then((dbProductData) => {
  if (!dbProductData) {
    return res.status(404).json({ message: 'No product with this id!' });
  } else {
    console.log("Product Data", dbProductData)
  }
}).catch((err)=> console.log("error updating box", err))
      }
    }

})
  //   console.log("dbcartData", dbCartData)

  //     Cart.findOneAndUpdate(
  //   { customerId: req.body.customerId, '_id': req.body.boxId},
  //   {$inc: {"quantity": req.body.quantity}},
  //   { new: true }
  // ).then((res)=> console.log("the response", res))
  // .catch((err) => {
  //   console.log(err);
  //   res.status(500).json(err);
  // });

    // for(var i = 0; i < dbCartData.length; i++){
    //   let itemToUpdate = dbCartData[i]._id.toString()

    //   if(itemToUpdate == req.body.boxId){
    //     dbCartData[i].quantity = req.body.quantity
    //     console.log("update quantity", dbCartData[i] )
    //   }
    // }
      // console.log("user's cart", data)
      // console.log("box to update", req.body.boxId)
      // Box.findOneAndUpdate(
      //   { id: req.body.boxId },
      //   { $set: { quantity: req.body.quantity } })
      //   .then((dbProductData) => {
      //   if (!dbProductData) {
      //     return res.status(404).json({ message: 'No product with this id!' });
      //   } else {
      //     res.json("Product Data", dbProductData)
      //   }
      // })
  //})
})

// POST for Box Sets to be added to Cart collection in database
app.post("/api/addToCart", async (req, res) => {

  const { img_url, name, price, category, customerId, quantity, productId, products} = req.body;

  try {
    console.log("customerId", customerId)
    let cart = await Cart.findOne({customerId});
    console.log("cart", cart)
    if (cart) {
  
        //product does not exists in cart, add new item
        console.log("find one and update cart", cart)
        const newItem = { productId };
        Cart.findOneAndUpdate(
          { customerId: cart.customerId},
          { $push: { products: productId } },
          { new: true },(error, data) => {
            if (error) {
              console.log("err adding product", error)
              res.status(500).json(error);
            } else {
              console.log("data", data.products)
              res.status(200).json(data.products);
            }
          })
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({customerId: customerId, products: productId});
      console.log("newCart", newCart)
      return res.status(201).send(newCart);
    }

  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

// GET for Cart contents based upon the customerId assigned from modal
app.get("/api/findCart/:id", (req, res) => {
  Cart.find({ customerId: req.params.id },  (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  }).populate('products')
});

// app.post("/api/newCart", (req, res) => {
//   console.log("hit the NEW CART server API", req.body);
//   Cart.create(req.body).then((error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       console.log("NEW EMPTY CART DATA", data);
//       res.json(data);
//     }
//   });
// });

app.put('/api/deleteFromCart/:id', (req, res) => {
  Cart.findOneAndUpdate(
    { customerId: req.params.id},
    { $pull: { products: req.body.boxId } },
    { new: true}, (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        console.log("data", data.products)
        res.status(200).json(data.products);
      }
    }
      )
    
    
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


// CART LOGIC GRAVEYARD

