const express = require('express');
const router1 = express.Router();
const Request = require('../model/service-request');

router1.post('/' ,(req,res,next)=>{
    /** check if number exist */
    let phone = req.body.number;
    Request.findOne({number:phone}).then((result)=>{
        if(result){
            console.log('Result : ',result)
            req.user_id = result._id;
        }
        else
            req.user_id = null;
        next();
    }).catch(err=>{
        next(err)
    })
},async(req,res)=>{
    try{
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    var c = 'SR'+a+''+b;
    var service_request = {
        problem: req.body.problem,
        serviceNumber:c,
        status : 0
    }
    /** if user exist */
    if(req.user_id){
        Request.findByIdAndUpdate({
            _id : req.user_id
        },{
           $push : {service_request : service_request}
        }).then(response =>{
            console.log('response : ',response);
        })
    }
    else{
        const request = new Request({
            name: req.body.name,
            number: req.body.number,
            service_request: service_request
        });
        const servicRrequest = await request.save();
    }
    res.send({serviceNumber : c,
        message:'Thank you for registering '+ req.body.name +'. your service request number is '+c+'. use it for futher interaction',
    })
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
});

router1.get('/:refNumber', async(req,res)=>{
    const refNumber = req.params.refNumber;
    console.log('Refrence number ',refNumber)
    try{
        const requests = await Request.findOne({ 
            $or: [
                { number: refNumber }, 
                { "service_request.serviceNumber":refNumber }
            ]});
        res.json(requests);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

router1.get('/', async(req,res)=>{
    try{
        const requests = await Request.find();
        res.json(requests);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

router1.get('/getServiceNumber/:number', async(req,res)=>{
    try{
        const getServiceNumber = await Request.findOne({number: req.params.number});
            res.send(getServiceNumber);
        }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


router1.get('/:id', async(req,res)=>{
    try{
        const getRequest = await Request.findById(req.params.id);
        res.json(getRequest);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router1.patch('/:id', async(req,res)=>{
    try{
        const deleteRequest = await Request.findById(req.params.id);
        request.number = req.body.number;
        const a1 = await request.save();
        res.json(a1);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router1.delete('/:id', async(req,res)=>{
    try{
        const request = await Request.findById(req.params.id);
        const a1 = await request.delete();
        res.json(a1);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports=router1;