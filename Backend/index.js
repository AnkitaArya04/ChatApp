import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app=express()

const PORT = process.env.PORT || 5001;

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})