const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
       type: String,
       required: true
    },
    confirmPassword: {
       type: String,
       required: true
    },
    age: {
        type: Date,
        required:  true
    },
    result: {
        type: String,
        required: false
    },
    tokens: [
      {
        token: {
            type: String,
            required: true
        }
      }    
    ]

})


// hasing passwword

userSchema.pre("save", async function (next) {
   if(this.isModified('password')){ // only if paassword is changed
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = await bcrypt.hash(this.password, 10);
   } 
   next();
})

//making token for authentication

userSchema.methods.generateAuthToken = async function (){
    try{
        let myToken = jwt.sign({_id:this._id}, process.env.My_Key);
        this.tokens = this.tokens.concat({token : myToken});
        await this.save();
        return myToken;
    }catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('USER', userSchema);
module.exports = User;
