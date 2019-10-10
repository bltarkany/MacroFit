/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  var trainee_login = sequelize.define("trainee_login", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Login: {
      type: DataTypes.STRING,
      unique: "compositeIndex"
    },
    Password: {
      type: DataTypes.STRING
    }
  });
  return trainee_login;
};