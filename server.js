const mongoose = require("mongoose");
const Box = require("./models/box.js");
const express = require("express");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("cors")());
app.listen(PORT, () => {
  console.log("App running on port 4000!");
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/BoxSet", {
  useNewUrlParser: true,
});

// Facebook Strategy // All other strategies will follow the same logical flow
const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const keys = require("./config");
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK.clientID,
      clientSecret: keys.FACEBOOK.clientSecret,
      callbackURL: "/auth/facebook/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      // user = { ...profile };
      return cb(null, profile);
    }
  )
);
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});
app.use(passport.initialize());

app.get("/auth/facebook", passport.authenticate("facebook")); //this syntax is different than his
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    res.redirect("/");
  }
);

app.get("/api/boxes", (req, res) => {
  console.log("hit the route!!");
  Box.find({}, (error, data) => {
    console.log(data, "/all stuff we got from DB");
    if (error) {
      res.send(error);
    } else {
      console.log("hit the else! out to res!!!!");
      res.json(data);
    }
  });
});
