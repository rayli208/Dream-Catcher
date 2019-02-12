// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Dreams
  app.get("/api/Dreams/", function(req, res) {
    db.Dream.findAll({})
      .then(function(dbDream) {
        res.json(dbDream);
      });
  });

  // Get route for retrieving a single Dream
  app.get("/api/Dreams/:id", function(req, res) {
    db.Dream.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbDream) {
        res.json(dbDream);
      });
  });

  // Dream route for saving a new Dream
  app.post("/api/Dreams", function(req, res) {
    console.log(req.body);
    db.Dream.create({
      title: req.body.title,
      body: req.body.body,
      quality_sleep: req.body.quality_sleep,
      length_sleep: req.body.length_sleep
    })
      .then(function(dbDream) {
        res.json(dbDream);
      });
  });

  // DELETE route for deleting Dreams
  app.delete("/api/Dreams/:id", function(req, res) {
    db.Dream.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbDream) {
        res.json(dbDream);
      });
  });
};
