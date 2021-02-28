const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questions = new Schema({
    Cateogory: {
        type: String,
        required: true,
    },
    main_question: {
        type: String,
        required: true,
    },
    anser_quesion: {
        type: String,
        required: true,
    },
    Question1: {
        type: String,
        required: true,
    },
    Question2: {
        type: String,
        required: true,
    },
    Question3: {
        type: String,
        required: true,
    }
  
  }, {
    versionKey: false
  });
  
  const questionsList = mongoose.model("questions", questions);
  module.exports = questionsList;
  