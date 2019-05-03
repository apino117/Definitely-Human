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

        // ======================================== Function to Do Math ======================================== //

        // This one will have to be a loop through all the scores in the array, so it'll be the current score at a given point
        // scoreArrayOne = humansArray[i].Scores;

        // This one will be the newest addition to our array
        // scoreArrayTwo = req.body.Scores;


        function findTotalDifference(scoreArrayOne, scoreArrayTwo) {

            // Establish blank array for purity
            var totalDifferenceArray = [];

            // Loop through both arrays at at each index get the absolute value of their difference
            for (i = 0; i < 10; i++) {
                totalDifferenceArray.push(Math.abs(scoreArrayOne[i] - scoreArrayTwo[i]));
            };


            // Not 100 % on why this works but it does
            console.log(totalDifferenceArray.reduce(add));
            function add(currentTotal, nextNumber) {
                return currentTotal + nextNumber;
            };
        };

        // Loop through each human in the array
        for (i = 0; i < humansArray.length; i++) {

            findTotalDifference(humansArray[i].scores, req.body.scores);

        };

        // ======================================== End of Math ======================================== //

        humansData.push(req.body);
        res.json(true);

    });

    // Clear Route
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        humansData.length = 0;

        res.json({ ok: true });
    });
};
