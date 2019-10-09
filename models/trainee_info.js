/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var trainee_info = sequelize.define("trainee_info", {
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
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zip5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EnrollDate: {
      type: DataTypes.DATEONLY
    }
  });
  return trainee_info;
};
