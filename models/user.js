const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  avatar: { type: String, required: false },
    bio: {type: String, required: false },
    email: { type: String, required: false},
    firstname: {type: String, required: false},
    lastname: {type: String, required: false},
});

module.exports = mongoose.model("User", user);
