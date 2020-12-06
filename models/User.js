const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  role: { type: String, default: "consumer" },
});

mongoose.model("users", userSchema);
