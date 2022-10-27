const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
mongoose.connect(
    process.env.MONGOurl),
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
    console.log('Connected to MongoDB')
}






app.listen(3002, ()=>{
    console.log("Server is live!")
})