const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const routes = require("./routes")
const db = require("./config/connection.js");
// const {userRoute} = require("./routes/users-route.js")

dotenv.config();



mongoose.set('debug', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("common"));
app.use(routes)

// app.get("/home", (req,res) =>{
//   res.send("Welcome to Homepage!")
// })
// app.post("/post", (req,res) =>{
//   res.send("You Posted Something!")
// })

// app.get("/users", (req,res) =>{
//   res.send("Welcome to User page!")
// }),

// app.use("/api/users", router);


db.once("open", () => {
  app.listen(3002, ()=>{
    console.log("Server is live!")
})
})
