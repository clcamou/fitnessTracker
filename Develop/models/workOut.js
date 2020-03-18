const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
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

const workOut = mongoose.model("workOut", workOutSchema);

module.exports = workOut;