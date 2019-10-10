var db = require("../models");
var signUp = {
  userID: ""
}; // signUp object will hold the Trainee's ID when it's generated

//console.log(db);
module.exports = function (app) {
  // Create a new signUp
  app.post("/api/traineeSignUp", function (req, res) {
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
        "CALL insertTraineeInfo(:param1,:param2,:param3,:param4,:param5,:param6,:param7,:param8,:param9,:param10,:param11,:param12,:param13,:param14,:param15,:param16,:param17,:param18)", {
          replacements: {
            param1: req.body.firstName,
            param2: req.body.lastName,
            param3: req.body.age,
            param4: req.body.gender,
            param5: req.body.weight,
            param6: req.body.height_FT,
            param7: req.body.height_IN,
            param8: req.body.activity_Level,
            param9: req.body.deficit,
            param10: req.body.email,
            param11: req.body.phoneNumber,
            param12: req.body.address,
            param13: req.body.city,
            param14: req.body.state,
            param15: req.body.zip,
            param16: date,
            param17: req.body.login,
            param18: req.body.password
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
};