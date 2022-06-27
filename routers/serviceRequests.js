const express = require('express');
const router1 = express.Router();
const Request = require('../model/service-request');
const servicesController = require('../controllers/servicesController')

router1.post('/' ,servicesController.checkIfNumberExists,servicesController.registerRequest);

router1.get('/:refNumber', servicesController.checkServiceRequestStatus)

module.exports=router1;