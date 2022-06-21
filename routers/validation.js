const express = require('express');
const router3 = express.Router();


router3.post('/', async(req,res)=>{
    try{  
        const number = req.body.phoneNumber;
        if(number.length == 10)
        {
            if(number.charAt(0) == 9 || number.charAt(0) == 8 || number.charAt(0) == 7 || number.charAt(0) == 6){
                res.send(number)
            }
            else{
                res.send('please check your number')
            }
        }
        else{
            res.send('please enter 10 digit phone number')
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


router3.post('/validateServiceRequest/', async(req,res)=>{
    try{  
        const serviceNumber = req.body.serviceNumber;
        if(serviceNumber.length == 6)
        {
            if(serviceNumber.slice(0,2) == 'SR'){
                res.send(serviceNumber)
            }
            else{
                res.send('please enter your service number starts with - SR')
            }
        }
        else{
            res.send('please check your service number')
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router3;