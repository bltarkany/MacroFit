/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    var trainee_macro = sequelize.define("trainee_macro", {
        calories: {
            type: DataTypes.INTEGER,
            defaultValue: "0"
        },
        proteins: {
            type: DataTypes.INTEGER,
            defaultValue: "0"
        },
        carbs: {
            type: DataTypes.INTEGER,
            defaultValue: "0"
        },
        fats: {
            type: DataTypes.INTEGER,
            defaultValue: "0"
        }
    });

    trainee_macro.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        trainee_macro.hasMany(models.trainee_meal_daily, {
            onDelete: "cascade"
        });
    };
    return trainee_macro;
};