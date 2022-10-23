const jwt = require("jsonwebtoken");
const User = require("../models/userDataSchema");
const express = require('express');

// const express = require('express');
// const cookieParser = require('cookie-parser')
// const app = express();

// app.use(cookieParser())


const UserCheck = async (req, res, next) => {

    try {
            const token = req.cookies.jwtoken;
            console.log(token + "hello I should be token");
            const checkToken = jwt.verify(token, process.env.My_Key);

            const myUser = await User.findOne({_id:checkToken._id, "tokens.token":token});
            console.log(token)

            if(!myUser){

                throw new Error("no user found")  
            } 

            req.token = token;

            req.myUser = myUser;
            req.userID = myUser._id;
            console.log(req.token);

            next();

    } catch (err){
            res.status(401).send('iaInvalid Token or No Token');
            console.log(err);
    }

}


module.exports = UserCheck;