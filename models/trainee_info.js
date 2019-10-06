/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var trainee_info = sequelize.define("trainee_info", {
    FirstName: {
      type: DataTypes.STRING
    },
    LastName: {
      type: DataTypes.STRING
    },
    DOB: {
      type: DataTypes.DATEONLY
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Weight: {
      type: DataTypes.INTEGER
    },
    Height: {
      type: DataTypes.STRING
    },
    Activity_Level: {
      type: DataTypes.STRING
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
    zip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EnrollDate: {
      type: DataTypes.DATEONLY
    }
  });
  return trainee_info;
};
