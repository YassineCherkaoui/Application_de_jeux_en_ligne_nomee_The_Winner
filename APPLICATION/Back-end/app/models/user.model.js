//object modeling tool designed to work in an asynchronous environment

const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  
//Everything in Mongoose starts with a Schema.
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
