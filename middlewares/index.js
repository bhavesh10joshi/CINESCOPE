const express = require("express");
require('dotenv').config();
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET  = process.env.JWT_SECRET;

app.use(express.json());

function usermiddleware(req,res,next)
{
    const token = req.headers.token ; 
    console.log(JWT_SECRET);
    const check = jwt.verify(token , JWT_SECRET);
    console.log(check);

    if(check)
    {
        next();
    }
    else{
        res.status(404).json({
        msg : "Wrong Credentials !"
    });
    }
}

module.exports = {
    usermiddleware : usermiddleware
}; 