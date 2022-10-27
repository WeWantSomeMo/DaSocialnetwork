const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{
  res.send("Welcome to Da Social Network!")
})

app.get("/users",(req,res) => {
  res.send("Welcome to User Netwok!")
})

app.listen(3002, ()=>{
    console.log("Server is live!")
})