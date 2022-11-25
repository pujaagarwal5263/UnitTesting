import { RequestHandler } from "express";
const User=require("../models/userSchema");


const adduser:RequestHandler=async(req,res)=>{
    try{
        const {name,email,password,contact}=req.body;
        if(!name || !email || !password || !contact){
            return res.status(402).send("Data missing");
        }
        let data=req.body;
        let newUser= new User(data);
        const userRegister=await newUser.save();
        if(!userRegister){
            return res.status(500).send("Could not register");
        }
        return res.status(200).json(userRegister);
      }catch(err){
          console.log(err);
      } 
}

const getuser:RequestHandler=async(req,res)=>{
    try{
        let data=await User.find();
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const getByid:RequestHandler=async(req,res)=>{
    try{
        let data=await User.find({"_id" :req.params.id});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const updateByid:RequestHandler=async(req,res)=>{
    try{
        let data=await User.update({"_id" :req.params.id},{$set:{"name":"new name"}});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const deleteByid:RequestHandler=async(req,res)=>{
    try{
        let data=await User.remove({"_id" :req.params.id});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

module.exports={adduser,getuser,getByid,updateByid,deleteByid}