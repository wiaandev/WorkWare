const mongoose = require('mongoose');

const HandyStandySchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    vibrationCount: {
        type: String,
        required: true
    },
    messages: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    timeline: Array

});

module.exports = mongoose.model('HandyStandy', HandyStandySchema);
