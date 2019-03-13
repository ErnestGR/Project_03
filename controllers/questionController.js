const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Question
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {res.send(200)},
  create: function (req, res) {
    db.Question
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {res.send(200)},
  remove: function(req, res) {res.send(200)}
} 