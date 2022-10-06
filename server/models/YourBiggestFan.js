const mongoose = require('mongoose');

const yourBiggestFanSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    timeline: Array,
    fanStatus: {
        type: Boolean,
        required: true,
        default: false
    }

});

module.exports = mongoose.model('YourBiggestFan', yourBiggestFanSchema);
