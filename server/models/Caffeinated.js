const mongoose = require('mongoose');

const caffeinatedSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    coordinates: {
        type: String,
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
    trackStatus: {
        type: Boolean,
        required: true
    },
    timeDiff: Number

});

module.exports = mongoose.model('Caffeinated', caffeinatedSchema);
