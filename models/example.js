const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  city: { type: String },
  date: { type: Date, default: Date.now },
  position: { type: String },
  phone: { type: String },
  email: { type: String },
  how: { type: String }
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
