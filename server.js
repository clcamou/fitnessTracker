const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

db.Workouts.creat({ name: "Ernest Hemingwat" })
.then(dbWorkout => {
    console.log(dbWorkout);
}).catch(({message})=> {
    console.log(message);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.put("/api/workouts", (req, res) => {
    db.User.find({})
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        res.json(err);
    });
});

app.post("/api/workouts", ({body}, res) => {
    db.Note.create(body)
})