const mongoose = require("mongoose");
const Box = require("./models/box.js");
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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/BoxSet", { useNewUrlParser: true });


app.get("/api/boxes", (req, res) => {
    console.log('hit the route!!')
    Box.find({}, (error, data) => {
        console.log(data, "/all stuff we got from DB")
        if (error) {
            res.send(error);
        } else {
            console.log('hit the else! out to res!!!!')
            res.json(data);
        }
    });
});





