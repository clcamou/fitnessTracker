const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    excerises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for the workout"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            }, 
            reps: {
                type: Number
            }, 
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
            date: {
                type: Date,
                default: Date.now
            }
        }], 
});

const workOut = mongoose.model("workOut", workOutSchema);

module.exports = workOut;