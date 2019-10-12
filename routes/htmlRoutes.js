var db = require("../models");
module.exports = function (app) {
  // Intro Form
  app.get("/", function (req, res) {
    res.render("form", {
      layout: false
    });
  });

  // Load dashboard page HARDCODE
  // app.get("/dashboard/2", function (req, res) {
  //   db.trainee_macro
  //     .findOne({
  //       where: {
  //         id: 2
  //       }
  //       ,include: [db.trainee_meal_daily]
  //     })
  //     .then(function (data) {
  //       // res.json(data);
  //       res.render("index", {
  //         macro: data
  //       });
  //     });
  // });

  // Dashaboard regular
  app.get("/dashboard/:id", function (req, res) {
    db.trainee_macro
      .findOne({
        where: {
          id: req.params.id
        }
        ,include: [db.trainee_meal_daily]
      })
      .then(function (data) {
        // res.json(data);
        res.render("index", {
          macro: data
        });
      });
  });

  // Workout
  app.get("/workout", function (req, res) {
    db.trainee_macro
    .findOne({
      where: {
        id: req.params.id
      }
      ,include: [db.trainee_meal_daily]
    })
    .then(function (data) {
      // res.json(data);
      res.render("workout", {
        macro: data
      });
    });
  });



  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};