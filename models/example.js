const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreManager = require("../utils/ScoreManager");
const SlackManager = require("../utils/SlackManager");

const exampleSchema = new Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  city: { type: String },
  date: { type: Date, default: Date.now },
  position: { type: String },
  phone: { type: String },
  email: { type: String },
  how: { type: String },
  answers: { type: Array, default: [] }
});

exampleSchema.post("save", function(lead, next) {
  const totalScore = lead.answers.reduce((score, answer) => {
    return score + answer;
  }, 0);
  const type = ScoreManager.GetTypeByScore(totalScore);
  SlackManager.sendToSlack({ ...lead._doc, type: type });
  next();
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
