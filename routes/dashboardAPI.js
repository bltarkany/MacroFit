var db = require("../models");

//console.log(db);
module.exports = function (app) {
    app.get("/api/dashboard/:id", function (req, res) {
        db.trainee_info
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function (data) {
                res.json(data);
            });
    });
    app.get("/api/dashboard/mealSummary/:id", function (req, res) {
        db.trainee_meal_daily
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function (data) {
                res.json(data);
            });
    });
    app.post("/api/dashboard/mealSummary/:id", function (req, res) {
        db.sequelize
            .query(
                "CALL insertMealInformation(:id, :calories, :protein, :carbs, :fats)", {
                    replacements: {
                        id: req.params.id,
                        calories: req.body.calories,
                        protein: req.body.protein,
                        carbs: req.body.carbs,
                        fats: req.body.fats
                    },
                    // type: db.sequelize.QueryTypes.SELECT,
                    raw: true
                }
            )
            .then(function (data) {
                console.log("Data inserted: " + JSON.stringify(data, null, 2));
                console.log(data[0]);
                res.status(200).json(data[0]);
            });
    });
};