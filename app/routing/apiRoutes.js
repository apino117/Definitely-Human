// --------------- Dependencies --------------- //

var humansData = require("../data/humans");


// --------------- Get Routes --------------- //

module.exports = function (app) {

    // Get Route
    app.get("/api/humans", function (req, res) {
        res.json(humansData);
    });

    // Post Route
    // app.post("/api/humans", function(req, res) {

    // });
};
