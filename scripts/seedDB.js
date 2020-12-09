const mongoose = require("mongoose");
const Box = require("../models/box.js");
const Cart = require("../models/cart.js");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MaryJaneMarket",
  { useNewUrlParser: true }
);

// Seed BOXES from models/box.js
boxes = [
  {
    Name: "Stoner Box",
    Price: 100,
    Category: "Box Sets",
    Img_url: "stonerPic.png",
    Description: "Perfect for the experienced user. Remember a happier time when you didn't have to smoke through your COVID mask!"
  },
  {
    Name: "Stressed-Out Pro Box",
    Price: 75,
    Category: "Box Sets",
    Img_url: "stressedOutProPic.png",
    Description: "Relieve the stress of a hard day - loosen your tie, kick off your shoes, and relax with our premium indica flower!"
  },
  {
    Name: "Creative Box",
    Price: 150,
    Category: "Box Sets",
    Img_url: "creativePic.png",
    Description: "Spark creativity and add color to your world with our enlightening sativa. No barriers to your next artistic project!"
  },
];

Box.collection
  .insertMany(boxes)
  .then((MarkyJaneMarket) => {
    console.log(MarkyJaneMarket);
  })
  .catch(({ message }) => {
    console.log(message);
  });

// Seed Cart from models/cart.js
Cart.collection
  .insertOne({})
  .then((MarkyJaneMarket) => {
    console.log(MarkyJaneMarket);
  })
  .catch(({ message }) => {
    console.log(message);
  });
