const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categories = new Schema({
  caty_name: {
    type: String,
    required: true,
    trim: true,
    minlenght: 3,
  }

}, {
  versionKey: false
});

const CategoryList = mongoose.model("categories", categories);
module.exports = CategoryList;
