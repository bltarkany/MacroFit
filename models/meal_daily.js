/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    var trainee_meal_daily = sequelize.define("trainee_meal_daily", {
        MealDate: {
            type: DataTypes.DATEONLY
        },
        Calories: {
            type: DataTypes.INTEGER
        },
        Protein: {
            type: DataTypes.INTEGER
        },
        Carbs: {
            type: DataTypes.INTEGER
        },
        Fats: {
            type: DataTypes.INTEGER
        }
    });
    return trainee_meal_daily;
};