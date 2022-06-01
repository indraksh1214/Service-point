const mongoose = require('mongoose');

const status = mongoose.Schema({  
    serviceNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('statusCheck', status) 