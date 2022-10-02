const mongoose = require('mongoose');

const BrightLiteSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    lightLevels: {
        type: Number,
        required: true
    },
    time: Number,
    date: {
        type: Date,
        default: Date.now
    },
    timeline: Array,
    lightStatus: {
        type: Boolean,
        required: true
    },
    timeDiff: Number,
    mode: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('BrightLite', BrightLiteSchema);
