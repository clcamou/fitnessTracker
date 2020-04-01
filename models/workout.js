const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exceriseSchema = new Schema({
    type: {
        type: String,
        trim: true, 
        required: "Enter the type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"
    },
    duration: {
        type: Number,
        required: "How long was your workout?"
    },
    weight: {
        type: Number,
        required: "Enter the weight"

    },
    reps: {
        type: Number,
        required: "How many reps did you do?"
    },
    sets: {
        type: Number,
        required: "How many sets did you do?"
    },
    distance: {
        type: Number,
        required: "How far did you go?"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const workoutSchema = new Schema({
    day: { type: Date, default: Date.now}, 
    excerises: [
        exceriseSchema
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;