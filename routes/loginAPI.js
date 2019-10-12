/* eslint-disable camelcase */
var db = require("../models");
var signUp = {
  userID: ""
}; // signUp object will hold the Trainee's ID when it's generated
var loginCreds = {
  id: "",
  route: ""
};

//console.log(db);
module.exports = function (app) {
  // Create a new signUp
  app.post("/api/traineeSignUp", function (req, res) {
    console.log(req.body);
    var today = new Date();
    // eslint-disable-next-line no-unused-vars
    var date =
      today.getFullYear() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate();
    //populates trainee_info with user entered data. insertTraineeInfo also returns the id assigned to the new sign up
    db.sequelize
      .query(
        "CALL insertTraineeInfo(:firstName, :lastName, :age, :gender, :weight, :height_ft, :height_in, :activity_level, :deficit, :login, :password, :calories, :proteins, :carbs, :fats)", {
          replacements: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            gender: req.body.gender,
            weight: req.body.weight,
            height_ft: req.body.height_FT,
            height_in: req.body.height_IN,
            activity_level: req.body.activity_Level,
            deficit: req.body.deficit,
            login: req.body.login,
            password: req.body.password,
            calories: req.body.calories,
            proteins: req.body.proteins,
            carbs: req.body.carbs,
            fats: req.body.fats
          },
          // type: db.sequelize.QueryTypes.SELECT,
          raw: true
        }
      )
      .then(function (data) {
        signUp.userID = Object.values(data[0])[0];
        console.log("Data inserted: " + JSON.stringify(data, null, 2));
        console.log(signUp.userID);
        res.status(200).json(data[0]);
        return 0;
      })
      .catch(function (err) {
        console.log(err);
        // Tests for dupe login entry
        if (err.errno === 1062) {
          res.status(418).end("The username: " + req.body.login + " is already taken! Please choose another.");
          alert("The username: " + req.body.login + "taken.");
          return -1;
        } else {
          res.status(400).end("Oops, something went wrong!");
        }
      });
  });

  // Delete a trainee's account
  app.delete("/api/traineeSignUp/:id", function (req, res) {
    db.trainee_info
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (data) {
        res.json(data);
      });
  });

  // Validate login creds and render personal dashboard
  // eslint-disable-next-line no-unused-vars
  app.get("/api/traineeSignUp/validate/:login/:password", function (req, res) {
    console.log("credentials entered: " + req.params.login + " " + req.params.password);
    db.sequelize
      .query(
        "CALL validateLogin(:login, :password)", {
          replacements: {
            login: req.params.login,
            password: req.params.password
          },
          type: db.sequelize.QueryTypes.SELECT,
          raw: true
        }
      )
      .then(function (data) {
        console.log(data);
        console.log("Data's length: " + data.length);
        var url = "/dashboard/" + Object.values(data[0])[0] + "/" + Object.values(data[0])[1];
        console.log(url);
        if (data.length > 0) {
          console.log("hit this");
          console.log(JSON.stringify(data[0], null, 2));
          // res.status(200).json(data[0])
          res.redirect("/dashboard");
          console.log("now hits this");

        } else {
          res.status(200).json(data[0]);
          alert("incorrect user/password");
        }
        // console.log(res);
      });
  });
};