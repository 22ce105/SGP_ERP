const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`.blue.bold)
);

const middleware = (req, res, next) => {
    console.log("Middleware");
    next();
};

app.get("/",(req, res) =>{
    res.send("Home");
});

app.get("/signu",(req,res)=>{
    res.send("Sign Up");
})

app.get("/login",(req,res)=>{
    res.send("Log In");
})

app.get("/about",(req,res)=>{
    res.send("About");
})

