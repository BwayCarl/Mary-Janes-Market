const mongoose = require("mongoose");
const Box = require("../models/box.js");
const Cart = require("../models/cart.js");
const tomatoes = require("./tomato");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MaryJaneMarket",
  { useNewUrlParser: true, useUnifiedTopology: true  }
);

console.log("Inserting products into DB",tomatoes)

Box.collection
  .insertMany(tomatoes)
  .then((MarkyJaneMarket) => {
    console.log(MarkyJaneMarket);
  })
  .catch(({ message }) => {
    console.log(message);
  });

  // Box.collection
  // .deleteMany({})
  // .then((MarkyJaneMarket) => {
  //   console.log(MarkyJaneMarket, "DELETED ALL");
  // })
  // .catch(({ message }) => {
  //   console.log(message);
  // });

// Seed Cart from models/cart.js
// Cart.collection
//   .insertOne({})
//   .then((MarkyJaneMarket) => {
//     console.log(MarkyJaneMarket);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// Cart.collection
//   .deleteMany({})
//   .then((MarkyJaneMarket) => {
//     console.log(MarkyJaneMarket, "DELETED ALL");
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });
