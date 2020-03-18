const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

//express code//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//use the api routes created above
app.use(require("./Develop/routes/apiRoutes"));
app.use(require("./Develop/routes/htmlRoutes"));

app.listen(PORT, function() {
    console.log("Now listending on port: 3000" );
});