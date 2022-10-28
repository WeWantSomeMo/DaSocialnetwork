const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
var router = require('./routes/users-route.js');
// const {userRoute} = require("./routes/users-route.js")

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('debug', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("common"));

function userRoute(){
app.use(require("./routes/users-route.js"))
// app.use(app.router);
// routes.initialize(app);
};

app.get("/", (req,res) =>{
  res.send("Welcome to Homepage!")
})

app.get(userRoute(), (req,res) =>{
  res.send("Welcome to User page!")
}),

// app.use("/api/users", router);


module.exports = router 

app.listen(3002, ()=>{
    console.log("Server is live!")
})