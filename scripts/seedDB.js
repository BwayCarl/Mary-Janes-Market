const mongoose = require("mongoose");
const Box = require("../models/box.js");
const Cart = require('../models/cart.js');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MaryJaneMarket", { useNewUrlParser: true });

// Seed BOXES from models/box.js
boxes = [
    {
        Name: "Stoner Box",
        Price: 100,
        Category: "Box Sets",
        Img_url: "GoodWeed.png"
    },
    {
        Name:"Stressed-Out Pro Box",
        Price: 75,
        Category: "Box Sets",
        Img_url: "BadWeed.png"
    },
    {
        Name: "Creative Box",
        Price: 150,
        Category: "Box Sets",
        Img_url: "UncleSkunker.png"
    }
]

Box.collection.insertMany(boxes)
.then(MarkyJaneMarket => {
    console.log(MarkyJaneMarket);
})
.catch(({ message}) => {
    console.log(message)
});


// Seed Cart from models/cart.js
Cart.collection.insertOne({})
.then(MarkyJaneMarket => {
    console.log(MarkyJaneMarket);
})
.catch(({ message}) => {
    console.log(message)
});
