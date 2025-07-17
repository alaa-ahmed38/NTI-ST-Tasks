const express = require('express');
const app = express();
// app.use(express.json());
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const postroute = require('./post-route')
const post = require('./post-schema');


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("you are connected to database");
}).catch((err)=>{
    console.log("Error",err)

});
app.use(express.json());
app.use ("/posts",postroute);
const port = process.env.PORT;
app.listen(port,'127.0.0.1',()=>{
    console.log("the server is listening ");
});

