const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());


dotenv.config({path:'./config.env'});

require('./database/conn');
// const User = require('./models/userDataSchema');

app.use(express.json());


app.use(require('./router/auth'));
const PORT = process.env.PORT || 5000; // port for heroku || port for local 

// app.get('/', (req, res) => { // for build use only
//     res.send(`Hello world from the server`);
// })
// app.get('/TestPage', (req, res) => {
//     res.cookie("test", "testToken");
//     res.send(`Hello world from the about`);
// })
app.get('/test', (req, res) => {
    res.send(`Hello world from the test`);
})
app.get('/signin', (req, res) => {
    
    res.send(`Hello world from the signin`);
})


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})
console.log("check");


if(process.env.NODE_ENV == "production") {
    app.use(express.static("frontend/build"));
}
