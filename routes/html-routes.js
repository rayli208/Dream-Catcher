// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

    // blog route loads blog.html
    app.get("/home", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

       // blog route loads blog.html
       app.get("/alldreams", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/alldreams.html"));
      });
  

};
