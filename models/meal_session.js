/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    var trainee_meal_session = sequelize.define("trainee_meal_session", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        MealTime: {
            type: DataTypes.DATE,
            primaryKey: true
        },
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
    return trainee_meal_session;
};