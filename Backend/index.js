import express from "express";
import dotenv from "dotenv";
const app=express()

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})