const mongoose = require('mongoose');

const trackMateSchema = mongoose.Schema({

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
        required: true,
        default: false
    },
    timeDiff: Number

});

module.exports = mongoose.model('TrackMate', trackMateSchema);
