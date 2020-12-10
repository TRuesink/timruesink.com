const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

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
      callbackURL: "http://localhost:3000/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // User.findOne gives us a promise
      const existingUser = await User.findOne({
        googleId: profile.id,
      });
      // if there is not an existing user, create a new user with this id
      if (existingUser) {
        return done(null, existingUser);
      }
      // if there is a user, return that user.

      const user = await new User({
        googleId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        proxy: true,
      }).save();
      done(null, user);
    }
  )
);

// strategy for password username authentication with bcryptjs hashing
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      const existingUser = await User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);
