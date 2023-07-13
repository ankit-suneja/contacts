const express = require("express");
const dotenv= require("dotenv").config()

const app = express()

const port = process.env.port;

app.get("/api/contacts", (req, res, next)=>{
    res.status(200).json({message:"hello"})
})

app.listen(port, ()=>{
    console.log(`connected to ${port}` );
})

