const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userCheck = require("../middleware/userCheck");

require("../database/conn");
const User = require("../models/userDataSchema");
const { application } = require("express");

router.get("/", (req, res) => {
  res.send("Hello from the server router js");
});

router.post("/register", (req, res) => {
  // console.log(req.body);
  // // res.send("My page");
  // res.json({message:req.body });
  const { name, email, age, password, confirmPassword, result } = req.body;
  if (!name || !email || !age || !password || !confirmPassword) {
    return res.status(422).json({ error: " Please fill your details" });
  }

  // User.findOne({email:email}).then((Userexist) => {
  //     if(Userexist){
  //         return res.status(422).json({error: "email already exist"});
  //     }

  //     const user = new User({name, email, age, password, confirmPassword});
  // user.save().then(() => {
  //     res.status(201).json({message: "User registered successfuly"});
  // }).catch((error) => {
  //     res.status(500).json({error: "Registration failed"});
  // })
  //     }).catch(err => {console.log(err);});
  User.findOne({ email: email })
    .then((Userexist) => {
      if (Userexist) {
        return res.status(422).json({ error: "email already exist" });
      }

      const user = new User({
        name,
        email,
        age,
        password,
        confirmPassword,
        result,
      });
      // hashing password

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered successfuly" });
        })
        .catch((error) => {
          res.status(500).json({ error: "Registration failed" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

// login module..getting id, password from user
router.post("/signin", async (req, res) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: " Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      console.log(password + " " + userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token + "token");

      res.cookie("authcookie", token, {
        expires: new Date(Date.now() + 864000000),
        httpOnly: true, // to run on unsecured
      });

      console.log(userLogin);
      console.log(userLogin._id);

      if (isMatch) {
        res.json({ message: "You are signed in", name: userLogin.name });
        // if(_id === userLogin._id){

        // const value = prompt("Line number");

        const _id = userLogin._id;
        const result = await User.updateOne(
          { _id },
          {
            $set: {
              age: 85, // 90 should be test result of the user
            },
          }
        );

        console.log(userLogin.age);
        // }
      } else {
        res.status(400).json({ error: "Invalid Credentials (Password)" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials (email)" });
    }
  } catch (err) {
    console.log(err);
  }
});

//updatinmg the document
// const updateDocument = async (_id) =>{
//     const userLogin = await  User.findOne({email: email});
//     try{
//         if(_id === userLogin._id){
//             const result = await User.updateOne({_id}, {
//                 $set : {
//                     age: 90
//                 }
//             } );}
//         }catch(err){
//             console.log(err)
//         }
//     }

// updateDocument(userLogin._id);

router.get("/TestPage", userCheck, (req, res) => {
  console.log("hello");
  res.send(req.myUser);
});

module.exports = router;
