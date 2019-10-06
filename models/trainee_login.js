/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var trainee_login = sequelize.define("trainee_login", {
    Login: DataTypes.STRING,
    Password: DataTypes.STRING
  });
  return trainee_login;
};
