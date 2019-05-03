// --------------- Dependencies --------------- //

var humansData = require("../data/humans");


// --------------- Get Routes --------------- //

module.exports = function (app) {

    // Get Route
    app.get("/api/humans", function (req, res) {

        res.json(humansData);

    });

    // Post Route
    app.post("/api/humans", function (req, res) {

        humansData.push(req.body);
        res.json();

    });

    // Clear Route
    app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        humansData.length = 0;
    
        res.json({ ok: true });
      });
};
