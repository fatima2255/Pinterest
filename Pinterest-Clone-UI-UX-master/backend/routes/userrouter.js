const express = require("express");
const userrouter = express.Router();
const user=require('../models/users')


userrouter.post('/usersignup',async(req,res)=>{
    try{
        const newUser=await user.create(req.body);
        res.status(201).json(newUser);
       }
       catch{
        res.status(500).json({apierror: error})
       }
})
// async function createUser(req,res){

//     try{
//      const newUser=await user.create(req.body);
//      res.status(201).json(newUser);
//     }
//     catch{
//      res.status(500).json({apierror: error})
//     }
//  }
 
module.exports={
    userrouter,
}