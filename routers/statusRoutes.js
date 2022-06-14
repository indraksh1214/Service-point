const express = require('express');
const router2 = express.Router();
const Status = require('../model/status');


router2.post('/' , async(req,res)=>{
    try{
    const status = new Status({
        serviceNumber: req.body.serviceNumber,
        status: req.body.status
    });
    const statusUpdating = await status.save();
    res.json(statusUpdating);
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
});

router2.get('/', async(req,res)=>{
    try{  
        const statuses = await Status.find();
        res.json(statuses);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


router2.get('/servicenumber', async(req,res)=>{
    try{  
        const getStatus = await Status.findOne({serviceNumber: req.params.serviceNumber});
        res.send(''+getStatus.status);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router2;