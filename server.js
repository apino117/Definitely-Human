// =========================================================== Psuedo-Code =========================================================== //


// 1) User clicks survey button ---> route to path with the survey
//      a. Establish Paths (Home, Survey, Default)
// 2) User fills out answers to questions
//      a. Scroll down list options for everything, 1 - 5, must answer questions
//      b. Input validation for name and photo
//          -------> The math gets done to find the total difference
//          -------> The data from user answers gets pushed to the peoples array on the apiRoute
//          -------> The user gets a modal with the human who is their mate
// 3) User is returned to home screen

// =========================================================== Actual Code =========================================================== //

// --------------- Dependencies --------------- //
var express = require("express");

// --------------- Express --------------- //
var app = express();
var PORT = process.env.PORT || 3000;;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --------------- Get Routes --------------- //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// --------------- Listening --------------- //
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


