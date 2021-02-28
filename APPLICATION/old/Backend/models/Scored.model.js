const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const roundStactSchema = new Schema({
  id_round: {
    type: mongoose.Types.ObjectId,
    ref: "rounds",
  },
  scode: {
    type: Number,
    required: true,
  }
});

const roundStactList = mongoose.model("RoundStat", roundStactSchema);
module.exports = roundStactList;

