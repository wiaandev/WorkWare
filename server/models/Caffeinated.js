const mongoose = require('mongoose');

const caffeinatedSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    coffeeLevels: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    timeline: Array,
    timeDiff: Number,
    averageIntake: Number

});

module.exports = mongoose.model('Caffeinated', caffeinatedSchema);
