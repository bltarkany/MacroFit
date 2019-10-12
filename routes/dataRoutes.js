var data = require("../public/js/data.js");
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
module.exports = function(app) {
  app.get("/workout", function(req, res) {
    console.log(fullBody[0]);
    var i = Math.floor(Math.random() * 7);
    console.log(i);
    res.render("workout", {fb: fullBody});
  });
};
