const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  question: { type: String/* , required: true  */},
  options: { type: Array/* , required: true  */},
  category: { type: String/* , required: true  */},
});

const Question = mongoose.model("Question", questionsSchema);

module.exports = Question;
