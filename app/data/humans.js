
var humansArray = [
    {
        Name: "Johnny Realman",
        Photo: "https://vignette.wikia.nocookie.net/supersmashbrosfanon/images/2/24/Johnny_Bravo.jpg",
        Scores: ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5",],
    },
    {
        Name: "Slurms Mckenzie",
        Photo: "https://cdn.shopify.com/s/files/1/0045/3561/5599/products/C750351_1200x.jpg?v=1545967154",
        Scores: ["5", "4", "3", "2", "1", "5", "4", "3", "2", "1"]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = humansArray;

// ======================================== Function to Do Math (Copy Pasta Out When Done) ======================================== //

scoreArrayOne = humansArray[0].Scores;
scoreArrayTwo = humansArray[1].Scores;

function findTotalDifference(scoreArrayOne, scoreArrayTwo) {

    var totalDifferenceArray = [];
    for (i = 0; i < 10; i++) {
        totalDifferenceArray.push(Math.abs(scoreArrayOne[i] - scoreArrayTwo[i]));
    };

    console.log(totalDifferenceArray.reduce(add));

    function add(currentTotal, nextNumber) {
        return currentTotal + nextNumber;
    };
};

findTotalDifference(scoreArrayOne, scoreArrayTwo);
