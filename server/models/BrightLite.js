const mongoose = require('mongoose');

const BrightLiteSchema = mongoose.Schema({
    name : String,
    lightLevels: Number,
    time: Number,
    date: {
        type: Date,
        default: Date.now
    },
    state: Boolean,
    timeline: Array,
    red: {type : Number, default: 0},
    blue: {type : Number, default: 0},
    green: {type : Number, default: 0},
    timeDiff: Number,
    mode: {
        type: String,
    }

});

module.exports = mongoose.model('BrightLite', BrightLiteSchema);
