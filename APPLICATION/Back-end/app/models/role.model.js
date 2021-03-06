//object modeling tool designed to work in an asynchronous environment
const mongoose = require("mongoose");

//Everything in Mongoose starts with a Schema.
const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;
