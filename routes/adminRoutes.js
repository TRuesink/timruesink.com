const requireAdmin = require("../middlewares/requireAdmin");

module.exports = (app) => {
  app.get("/admin", requireAdmin, (req, res) => {
    res.send("you are an admin user");
  });
};
