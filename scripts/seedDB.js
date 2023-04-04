const mongoose = require("mongoose");
const Box = require("../models/box.js");
const Cart = require("../models/cart.js");
const tomatoes = require("./tomato");
const lettuce = require("./lettuce");
const flowers = require("./flowers");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MaryJaneMarket",
  { useNewUrlParser: true, useUnifiedTopology: true  }
);

console.log("Inserting products into DB")

// ADD TOMATOES TO DB
// Box.collection
//   .insertMany(tomatoes)
//   .then((MarkyJaneMarket) => {
//     console.log(MarkyJaneMarket);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// DELETE ALL PRODUCT FROM DB
  // Box.collection
  // .deleteMany({})
  // .then((MarkyJaneMarket) => {
  //   console.log(MarkyJaneMarket, "DELETED ALL");
  // })
  // .catch(({ message }) => {
  //   console.log(message);
  // });

// ADD LETTUCE TO DB
// Box.collection
//   .insertMany(lettuce)
//   .then((MarkyJaneMarket) => {
//     console.log(MarkyJaneMarket);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// ADD FLOWERS TO DB
// Box.collection
//   .insertMany(flowers)
//   .then((MarkyJaneMarket) => {
//     console.log(MarkyJaneMarket);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });


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
