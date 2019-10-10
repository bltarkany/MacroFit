/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    var trainee_meal_daily = sequelize.define("trainee_meal_daily", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        MealDate: {
            type: DataTypes.DATEONLY,
            primaryKey: true
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