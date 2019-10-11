/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  var trainee_info = sequelize.define("trainee_info", {
    id: {
      type: DataTypes.INTEGER,
      min: 10000,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING
    },
    LastName: {
      type: DataTypes.STRING
    },
    Age: {
      type: DataTypes.INTEGER
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Weight: {
      type: DataTypes.INTEGER
    },
    Height_FT: {
      type: DataTypes.INTEGER
    },
    Height_IN: {
      type: DataTypes.INTEGER
    },
    Activity_Level: {
      type: DataTypes.STRING
    },
    Deficit: {
      type: DataTypes.INTEGER
    },
    EnrollDate: {
      type: DataTypes.DATEONLY
    }
  });
  return trainee_info;
};