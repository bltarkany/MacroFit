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
};