const mongoose = require("mongoose");
const Box = require("./models/box.js");
const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("App running on port 3000!");
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/BoxSet", { useNewUrlParser: true });


app.get("/api/boxes", (req, res) => {
    Box.find({}, (error, data) => {
        console.log(req, "/all")
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});





