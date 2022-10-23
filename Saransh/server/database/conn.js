const mongoose = require('mongoose');
const vtDB = process.env.DBCRED; 

//connection to db
mongoose.connect(vtDB).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log(err)
});