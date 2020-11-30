// Facebook Strategy // All other strategies will follow the same logical flow
const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const keys = require("../config");
const chalk = require("chalk");

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
  console.log("serialize");
  cb(null, {
    id: user.id,
    displayName: user.displayName,
  });
});

passport.deserializeUser((user, cb) => {
  console.log("deserialize");
  cb(null, user);
});

module.exports = passport;
