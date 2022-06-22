const mongoose = require('mongoose');

const validation = mongoose.Schema({  
    validator: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('validation', validation) 