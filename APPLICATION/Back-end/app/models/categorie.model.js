//object modeling tool designed to work in an asynchronous environment

const mongoose = require('mongoose');
 
//Everything in Mongoose starts with a Schema.
const categorieschema = mongoose.Schema({

  categorie_name: String

});

module.exports = mongoose.model('Categorie', categorieschema);