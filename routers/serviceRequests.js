const express = require('express');
const router1 = express.Router();
const Request = require('../model/service-request');

router1.post('/' , async(req,res)=>{
    try{
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    var c = 'SR'+a+''+b;
    const request = new Request({
        name: req.body.name,
        number: req.body.number,
        problem: req.body.problem,
        serviceNumber: c
    });
    const servicRrequest = await request.save();
    res.send(servicRrequest)
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
});

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
        const getServiceNumber = await Request.findOne({number: req.body.number});
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