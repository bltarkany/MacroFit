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

    trainee_meal_daily.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        trainee_meal_daily.belongsTo(models.trainee_macro, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return trainee_meal_daily;
};