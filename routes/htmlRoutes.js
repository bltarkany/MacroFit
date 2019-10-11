var db = require("../models");
module.exports = function(app) {
  // Intro Form
  app.get("/", function(req, res) {
    res.render("form", { layout: false });
  });

  // Load dashboard page
  app.get("/dashboard", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Calendar
  app.get("/Calendar", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("calendar", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Profile
  app.get("/profile", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("profile", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Nutrition
  app.get("/nutrition", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("nutrition", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Workout
  app.get("/workout", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("workout", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
