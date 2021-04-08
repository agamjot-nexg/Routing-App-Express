const express = require("express");
const route = express.Router();
const avengers = require('./database');


// Get Request

route.get('/avengers',(req,res)=>{
    res.json({userData : avengers});
});

route.post('/avengers', (req,res)=>{
    const incomingAvengers = req.body
    avengers.push(incomingAvengers);
    res.json(avengers);
});

route.get('/avengers/:id',(req,res)=>{
    
    const avengersId = Number(req.params.id);
    const getAvenger = avengers.find(((avenger)=> avenger.id === avengersId))
    if(!getAvenger){
        res.status(500).send("Avenger Not Found..!!");
    }else{
        res.status(200).json({userData : [getAvenger]});
    }
    
})

module.exports = route;