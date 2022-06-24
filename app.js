const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb+srv://indraksh:1214u@cluster0.wjfqenf.mongodb.net/?retryWrites=true&w=majority');
const con = mongoose.connection;

con.on('error', ()=>{
    console.log('connection failed..');
});


con.on('open', ()=>{
    console.log('DB connected..');
});



app.use(bodyParser.json());

const serviceRequestRoutes = require('./routers/serviceRequests');
app.use('/serviceRequest', serviceRequestRoutes);

const statusCheckingRoutes = require('./routers/statusRoutes');
app.use('/status', statusCheckingRoutes);

const validationRoutes = require('./routers/validation');
app.use('/validation', validationRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        error:"bad request"
    })
})

module.exports = app;