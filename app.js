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

app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 404;
    const message = error.message || 'Bad Request';
    res.status(status).json({message:message});
})

module.exports = app;