const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()
const url =process.env.MongoDB;
// const mcqRouter = require('./routers/mcq');
const app = express();
mongoose.connect( url, { useNewUrlParser: true , useUnifiedTopology:true});
const con = mongoose.connection;

const uzb=require("./public/main")
console.log(uzb);
// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json()); 

// database connection
con.on('open', function(){
    console.log('connected')
});
// app.use('/mcq',mcqRouter);


// start
app.listen(process.env.PORT, function(){
    console.log('server worked');
});