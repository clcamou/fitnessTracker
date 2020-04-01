//nodes needed to run the app
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//set up the port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

//express code//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//use the api routes created above
app.use(express("./routes/apiRoutes.js"));
app.use(express("./routes/htmlRoutes.js"));

app.listen(PORT, function() {
    console.log("Now listending on port: 3000" );
});