const mongoose = require('mongoose');

const validation = mongoose.Schema({  
    valaidator: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('validation', validation) 