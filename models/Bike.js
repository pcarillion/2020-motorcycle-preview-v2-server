const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    engine: {
        type: Number,
    },
    horsepower: {
        type: Number,
    },
    price: {
        type: Number,
    },
    type: {
        type: String,
        enum: ["Cruiser", "Touring", "Roadster", "Sportbike", "Dual-sport", "Standard-retro"],
    },
    usage: {

    },
    A2: Boolean,
    description: String,
    image: String,
    gallery: Array,
    link: String
})

const bikeModel = mongoose.model("Bike", bikeSchema)

module.exports = bikeModel;