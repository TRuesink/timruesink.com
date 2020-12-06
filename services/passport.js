const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/dev");

const User = mongoose.model("users");

// serialize user
passport.serializeUser((user, done) => {
  done(null, user.id); //user.id is the OID given by mongo. we turned mongoose model instance into a user id
});

//deserialize user - take a cookie (id) and return a mongoose model instance
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // User.findOne gives us a promise
      const existingUser = await User.findOne({ googleId: profile.id });
      // if there is not an existing user, create a new user with this id
      if (existingUser) {
        return done(null, existingUser);
      }
      // if there is a user, return that user.
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
