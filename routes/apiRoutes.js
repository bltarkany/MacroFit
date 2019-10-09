console.log("apiroutes loaded");
var db = require("../models");
var signUp = {
  userID: ""
}; // signUp object will hold the Trainee's ID when it's generated

//console.log(db);
module.exports = function(app) {
  // Get all logins InDB
  app.get("/api/addTrainee", function(req, res) {
    console.log(db.trainee_login);
    db.trainee_login.findAll({}).then(function(dbLoginInfo) {
      console.log(dbLoginInfo);
      res.json(dbLoginInfo);
    });
  });

  // Create a new signUp
  app.post("/api/addTrainee", function(req, res) {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    //populates trainee_info with user entered data. insertTraineeInfo also returns the id assigned to the new sign up
    signUp.userID = db.sequelize
      .query(
        "CALL insertTraineeInfo(:param1,:param2,:param3,:param4,:param5,:param6,:param7,:param7,:param8,:param9,:param10,:param11,:param12,:param13)",
        {
          replacements: {
            param1: req.body.firstName,
            param2: req.body.lastName,
            param3: req.body.dob,
            param4: req.body.gender,
            param5: req.body.weight,
            param6: req.body.height,
            param7: req.body.activity_Level,
            param8: req.body.email,
            param9: req.body.phoneNumber,
            param10: req.body.city,
            param11: req.body.state,
            param12: req.body.zip,
            param13: date
          },
          type: db.sequelize.QueryTypes.SELECT
        }
      )
      .then(function(dbTraineeInfo) {
        console.log(signUp.userID);
        res.json(dbTraineeInfo);
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
