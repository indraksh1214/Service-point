const mongoose = require('mongoose');

const requestService = mongoose.Schema({
    name: {
        type: String,
    },
    number: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },    
    serviceNumber: {
        type: String,
    }
});

module.exports = mongoose.model('servicerequest', requestService); 