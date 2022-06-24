const mongoose = require('mongoose');

const requestService = mongoose.Schema({
    name: {
        type: String,
    },
    number: {
        type: String,
        required: true
    },
    service_request : [{
        problem: {
            type: String,
            required: true
        },    
        serviceNumber: {
            type: String,
        },
        status: {
            type: String,
            required: true
        },
        timestamp : {
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model('servicerequest', requestService); 