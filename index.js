// Third part packages
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");
const bodyParser = require("body-parser");
// native imports
require("./models/User");
require("./services/passport");
const keys = require("./config/dev");

// connect with database
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());

require("./routes/authRoutes")(app);
require("./routes/adminRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
