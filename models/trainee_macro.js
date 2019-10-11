/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    var trainee_macro = sequelize.define("trainee_macro", {
        calories: {
            type: DataTypes.INTEGER
        },
        proteins: {
            type: DataTypes.INTEGER
        },
        carbs: {
            type: DataTypes.INTEGER
        },
        fats: {
            type: DataTypes.INTEGER
        }
    });
    return trainee_macro;
};