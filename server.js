const express = require("express");
const dotenv= require("dotenv").config()

const app = express()

const port = process.env.port;

app.listen(port, ()=>{
    console.log(`connected to ${port}` );
})

