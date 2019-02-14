const db = require("../models/");

module.exports = {

  getAllDreams: function(req, res) {
    db.Dream
      .findAll({})
      .then(function(dbDream) {
        res.json(dbDream);
      })
  },

  getUserDreams: function (req,  res) {
    db.Dream
      .findAll({
        where: {
          UserId: req.params.id
        }
      })
      .then(function(dbDream) {
        res.json(dbDream);
      })
    },

  deleteDream: function(req, res) {
    db.Dream
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbDream) {
        res.json(dbDream);
      })
  },

  createDream: function(req, res) {
    console.log(req.body);
    db.Dream
      .create({
        title: req.body.title,
        body: req.body.body,
        quality_sleep: req.body.quality_sleep,
        length_sleep: req.body.length_sleep,
        UserId: req.user.id
      })
      .then(function(dbDream) {
        res.json(dbDream);
      })
  }

  }

