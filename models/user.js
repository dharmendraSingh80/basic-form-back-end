var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    image: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = new mongoose.model("User", userSchema);
