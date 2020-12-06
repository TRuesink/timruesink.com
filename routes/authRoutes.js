const passport = require("passport");

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
      res.redirect("/");
    }
  );

  // route to obtain user info
  app.get("/api/user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
