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

        var globalSums = [];

        // the req.body is the new human getting pushed

        var newHuman = req.body;

        humansData.push(newHuman);

        // The humans data is the humans array

        // ======================================== Function to Do Math ======================================== //

        // This one will have to be a loop through all the scores in the array, so it'll be the current score at a given point
        // scoreArrayOne = humansArray[i].Scores;

        // This one will be the newest addition to our array
        // scoreArrayTwo = newHuman.Scores;


        function findTotalDifference(scoreArrayOne, scoreArrayTwo) {

            // Establish blank array for purity - this array will hold things while they're moving
            var temporaryArray = [];

            // Loop through both arrays at at each index get the absolute value of their difference
            for (i = 0; i < 10; i++) {
                temporaryArray.push(Math.abs(scoreArrayOne[i] - scoreArrayTwo[i]));
            };


            // This is the for loop version of the reduce method, it doesnt use return which was exiting loops early later on in the functions
            var sum = 0;

            for (var i = 0; i < temporaryArray.length; i++) {
                sum += temporaryArray[i];
            };

            console.log(sum);

            globalSums.push(parseInt(sum));

            // // Not 100 % on why this works but it does - it adds everything in the array together

            // console.log(temporaryArray.reduce(add));

            // function add(currentTotal, nextNumber) {
            //     return currentTotal + nextNumber;
            // };
        };

        // Test case with just one static array
        // findTotalDifference(humansData[0].scores, newHuman.scores);


        // Create Special Number that will be one less than the humans data array length - this is so when we loop we leave off the last addiition (the one being tested)

        var specialNumber = humansData.length - 1;

        // console.log("special number is " + specialNumber);

        // Loop through each human in the array
        for (i = 0; i < specialNumber; i++) {

            findTotalDifference(humansData[i].scores, newHuman.scores);

        };
        
        // Get the sums in an array
        console.log("Global sums " + globalSums);

        // Find the lowest number in the array - thats the match because there are the fewest differences

        // Return the JSON info that is in accordance with the match




        // ======================================== End of Math ======================================== //

        res.json(true);

    });

    // Clear Route
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        humansData.length = 0;

        res.json({ ok: true });
    });
};


