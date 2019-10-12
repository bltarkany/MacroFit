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

    trainee_macro.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        trainee_macro.hasMany(models.trainee_meal_daily, {
            onDelete: "cascade"
        });
    };
    return trainee_macro;
};