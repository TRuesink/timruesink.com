const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  role: { type: String, default: "consumer" },
});

mongoose.model("users", userSchema);
