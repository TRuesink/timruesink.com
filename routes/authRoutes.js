const passport = require("passport");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("hello world");
  });

  // Google oauth route
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // Google oauth callback route
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      console.log(req.body);
      res.redirect("/");
    }
  );

  // username and password authentication
  app.post(
    "/auth/local/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.post("/api/register", async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });
    console.log(req.body);
    if (existingUser) {
      console.log(existingUser);
      return res.redirect("/login");
    }
    const hash = bcrypt.hashSync(req.body.password, 14);
    req.body.password = hash;
    const newUser = await new User(req.body).save();
    res.json({
      id: newUser._id,
      role: newUser.role,
      first: newUser.firstName,
      last: newUser.lastName,
    });
  });

  // route to obtain user info
  app.get("/api/user", (req, res) => {
    if (!req.user) {
      return res.send(null);
    }
    res.json({
      id: req.user._id,
      role: req.user.role,
      first: req.user.firstName,
      last: req.user.lastName,
    });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
