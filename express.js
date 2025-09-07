require('dotenv').config();

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {UserModel} = require("./db");
mongoose.connect(process.env.MONGODB_URL);
const { z } = require("zod");
const {usermiddleware} = require("./middlewares/index");
const JWT_SECRET = process.env.JWT_SECRET;
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

function transform(movie)
{
    return encodeURIComponent(movie);
}

app.post("/signup" , async function(req , res)
{
    const safeobject = z.object({
        username : z.string(),
        email : z.string().includes('@').min(5),
        password : z.string().min(8)
    });
    console.log("hi");
    const safeparsed = safeobject.safeParse(req.body);

    if(!safeparsed)
    {
        res.status(404).json({
            msg : "Invalid Credentials ! " 
        });
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = await bcrypt.hash(password , 5);
    let checkuserregister = true; 

    try{
        await UserModel.create({
            username : username , 
            email  : email , 
            password : hashedpassword
        }); 
    }
    catch(e)
    {
        checkuserregister = false; 
        res.status(404).json({
            msg : "Some error occurred"
        });
    }

    if(checkuserregister)
    {
        res.json({
            msg : "User registered successfully !"
        });
    }
});

app.post("/login" , async function(req , res)
{
    const username = req.body.username;
    const password = req.body.password;

    const finduser = await UserModel.findOne({
        username : username 
    });

    if(finduser)
    {
        const check = await bcrypt.compare(password, finduser.password);
        if(check)
        {
            const token = jwt.sign({
                id : finduser._id
            } , JWT_SECRET);
            
            res.json({
                token : token
            });
        }
        else{
            res.status(404).json({
                msg : "Incorrect Password ! "
            });
            return ;
        }
    }
    else
    {
        res.status(404).json({
            msg : "No such username found !"
        });
        return ;
    }
});
app.use(usermiddleware);
app.post("/search" , async function(req,res)
{
    let movie = req.body.movie;
    movie = transform(movie);
    console.log(movie);
    const url0 = 'https://mdblist.p.rapidapi.com/?s='+movie+'&m=movie';
    const options0 = {
	method: 'GET',
	headers: {
		        'x-rapidapi-key': process.env.RAPID_API,
		        'x-rapidapi-host': 'mdblist.p.rapidapi.com'
	        }
    };
    let check = true;
    let imdbid;
    try
    {
        const response = await fetch(url0, options0);
        const result = await response.json();
        if(result.response == true && result.total > 0)
        {
            imdbid = result.search[0].imdbid;
        }
        else if(result.response == true && result.total == 0)
        {
            check = false;
        }
    }
    catch(e)
    {
        check = false;
        console.log("bhuvi")
    }

    if(check)
    {
        const url1 = 'https://movie-database-by-based-api.p.rapidapi.com/v1/movies/?i='+imdbid;
        const options1 = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': process.env.RAPID_API,
		    'x-rapidapi-host': 'movie-database-by-based-api.p.rapidapi.com'
	        }
        };

        try {
	        const response = await fetch(url1, options1);
            const result = await response.json();
            console.log(result);
            res.json({
                result : result
            });
        } 
        catch (e) 
        {
            console.log("joshi");
	        check = false;
        }
    }
    if(check == false)
    {
        res.status(404).json({});
    }
});

app.listen(4000);