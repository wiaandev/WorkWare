const mongoose = require('mongoose');

const caffeinatedSchema = mongoose.Schema({
    
   cupsDrunk: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Caffeinated', caffeinatedSchema);




