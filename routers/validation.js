const express = require('express');
const router3 = express.Router();
const validate = require('../model/validation');

router3.post('/', async(req,res)=>{
    try{  
        const validationNumber = new validate({
            validator: req.body.phoneNumber 
        });
        const number = req.body.phoneNumber;
        if(number.length() == 10)
        {
            if(number.charAt(0) == 9 || number.charAt(0) == 8 || number.charAt(0) == 7 || number.charAt(0) == 6){
                res.json(validationNumber);
            }else{
                res.send('inside')
            }
        }
        else{
            res.send('outside')
        }
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


router3.post('/validateServiceRequest/', async(req,res)=>{
    try{  
        const serviceNumber = req.body.serviceNumber;
        if(serviceNumber.length() == 6)
        {
            if(serviceNumber.slice(0,2) == 'SR'){
                const validationNumber1 = new validate({
                    validator: serviceNumber
                })
                res.json(validationNumber1)
            }
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router3;