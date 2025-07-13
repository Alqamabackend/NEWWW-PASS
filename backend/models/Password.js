const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  site: String,
  username: String,
  password: String,
});

module.exports = mongoose.model("Password", PasswordSchema);
