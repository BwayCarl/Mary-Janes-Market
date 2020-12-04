const mongoose = require("mongoose");
const Box = require("./models/box.js");
const Cart = require('./models/cart.js')
const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.listen(4000, () => {
    console.log("App running on port 4000!");
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MaryJaneMarket", { useNewUrlParser: true });

// GET Box Sets from Database to homepage
app.get("/api/boxes", (req, res) => {
    console.log('hit the route!!')
    Box.find({}, (error, data) => {
        console.log(data, "/all stuff we got from DB")
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

// POST for Box Sets to be added to Cart collection in database 
app.post("/api/addToCart", (req, res) => {
    console.log("hit the ADD TO CART server API")
    Cart.create(req.body).then((error, data) =>{
        console.log(data, "stuff we added to Cart")
        if (error) {
            res.send(error);
        } else {
            console.log('THIS IS what we got back when we saved', data, error)
            console.log('hit the else! out to res!!!!')
            res.json(data);
        }
    })
})

// GET for Cart contents based upon the customerId assigned from modal
app.get("/api/findCart/:id", (req, res) => {
    console.log("find card!!! route!!", req.params)
    Cart.find({customerId: req.params.id}, (error, data) =>{
        console.log(data, "stuff we added to Cart associated with customerId")
        if (error) {
            res.send(error);
        } else {
            console.log('hit the else! out to res.json!!!!')
            res.json(data);
        }
    })
})


app.post("/api/newCart", (req, res) => {
    console.log("hit the NEW CART server API")
    Cart.create(req.body).then((error, data) =>{
        
        if (error) {
            res.send(error);
        } else {
            console.log('NEW EMPTY CART DATA', data)
            res.json(data);
        }
    })
})





