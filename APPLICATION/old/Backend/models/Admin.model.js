const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const admin = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminList = mongoose.model("Admin", admin);
module.exports = AdminList;
