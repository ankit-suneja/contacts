const express = require("express");
const dotenv= require("dotenv").config()
const router = require("./routes/Contactroutes")

const app = express()

const port = process.env.port;

app.use(express.json());

app.use("/api/contacts", router); 

app.listen(port, ()=>{
    console.log(`connected to ${port}` );
})

