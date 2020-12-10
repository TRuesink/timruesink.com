const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: { type: String, default: "basic", enum: ["basic", "writer", "admin"] },
});

mongoose.model("users", userSchema);
