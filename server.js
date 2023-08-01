const express = require("express");
const mongoose = require("mongoose");

const dotenv= require("dotenv").config()
const router = require("./routes/Contactroutes");
const errorHandler = require("./routes/Controllers/middleware/errorhandler");

const app = express()

const port = process.env.port;

app.use(express.json());
app.use("/api/contacts", router); 
app.use(errorHandler);

mongoose.connect('mongodb+srv://admin:RwMZOP2HhrrHNmt9@cluster0.ghyejse.mongodb.net/')
    .then(()=>app.listen(port))
    .then(()=>console.log(`connected to database and listening on port ${port}`))
    .catch((err)=>console.log(err))
 