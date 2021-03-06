//object modeling tool designed to work in an asynchronous environment
const mongoose = require('mongoose');

//Everything in Mongoose starts with a Schema.
const questionschema = mongoose.Schema({
    Cateogory: String,
    main_question : String,
    anser_quesion : String,
    incorrect1 : String,
    incorrect2 : String,
    incorrect3 : String,
});

module.exports = mongoose.model('Question', questionschema);