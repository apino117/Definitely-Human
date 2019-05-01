// --------------- Dependencies --------------- //

var humansData = require("../data/humans");


// --------------- Get Routes --------------- //

module.exports = function(app) {

  app.get("/api/humans", function(req, res) {
    res.json(humansData);
  });
};
