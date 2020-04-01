const path = require("path");

//set up all the get routes to append to each html page. 
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("stats", function(req, res) {
        res.semdFile(path.join(__dirname, "../public/stats.html"));
    });
};