const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    max: 20,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
  },
});
module.exports = mongoose.model("User", UserSchema);