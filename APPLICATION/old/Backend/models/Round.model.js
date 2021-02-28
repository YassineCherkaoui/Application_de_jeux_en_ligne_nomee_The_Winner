const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const roundSchema = new Schema({

  id_group_members: {
    type: mongoose.Types.ObjectId,
    ref: "groupmembers",
  },
  id_question: {
    type: mongoose.Types.ObjectId,
    ref: "questions",
  },
  id_question_token: {
    type: mongoose.Types.ObjectId,
    ref: "questiontokens",
  },
  is_answered: {
    type: Boolean,
  },
});

const RoundList = mongoose.model("Round", roundSchema);
module.exports = RoundList;

