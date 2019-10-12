var db = require("../models");
module.exports = function (app) {
  // Intro Form
  app.get("/", function (req, res) {
    res.render("form", {
      layout: false
    });
  });

  // Load dashboard page
  app.get("/dashboard/10/cd0981c33b36f71", function (req, res) {
    db.trainee_macro
      .findOne({
        where: {
          id: 10
        }
      })
      .then(function (data) {
        res.render("index", {
          macro: data
        });
      });
  });

  // Example Page
  app.get("/dashboard", function (req, res) {
    res.render("index");
  });

  // Workout
  app.get("/workout", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("workout", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });



  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};