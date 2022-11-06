const mongoose = require('mongoose');

const caffeinatedInputSchema = mongoose.Schema({
    
    userInput: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('CaffeinatedUserInput', caffeinatedInputSchema);
