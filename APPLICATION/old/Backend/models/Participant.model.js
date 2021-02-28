const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const participant = new Schema({

  full_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isValid: {
    type: Boolean,
  },
  online: {
    type: Boolean,
  },
  email: {
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
  score: {
    type: Number,
  },
});




const ParticipantList = mongoose.model("Participant", participant);
module.exports = ParticipantList;
