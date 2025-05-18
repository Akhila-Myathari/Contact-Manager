const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const user = require('../models/userModel')
const jwt = require("jsonwebtoken")
//@desc register the user
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(async (req,res)=>{
    const{username,email,password} = req.body;
    if(!username|| !email ||!password){
        res.status(404)
        throw new Error("all fileds are mandatory")
    }
    const available = await user.findOne({email})
    if(available){
        res.status(400);
        throw new Error("User already registed!");
    }
    // hashing password
    const hashedPassword = await bcrypt.hash(password,10)
    console.log(hashedPassword)
    res.status(201).json(hashedPassword)
    const createuser = await user.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`user created`);
    if(createuser){
        res.status(201).json({_id:user.id,email:user.email});
    }
    else{
        res.status(400);
        throw new Error("couldn't create user")
    }
    res.json({message: " user created "})
})
//@desc login the user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email||!password){
        res.status(400)
        throw new Error("all fields are mandatory!")
    }
    const createduser = await user.findOne({email})
    if(createduser && (await bcrypt.compare(password,createduser.password))){
         const accessToken = jwt.sign(
            {
            createduser:{
                username:createduser.username,
                email : createduser.email,
                id : createduser.id
            },
         },
        process.env.ACCESS_TOKEN_SECERT,
       { expiresIn:"15m"}
    )
    res.status(200).json({accessToken})
    //res.json("user exist")
    }
    else{
        res.status(401)
        throw new Error("email or password are not same")
    }
})
//@desc set password
//@route post api/user/forgotpassword
//@access public
const forgotPassword = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const available = await user.findOne({email: email})
    if(!available){
        res.status(404);
        throw new Error("user not found");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newpassword =await user.findOneAndUpdate({email:email},
        {password:hashedPassword}
    )
    if(newpassword){
        res.status(200).json(newpassword);
    }
})





//@desc get current user
//@route GET api/user/current
//@access private
const  currentUser = asyncHandler(async(req,res)=>{
    res.json(req.createduser)
})

module.exports = {registerUser,loginUser,currentUser,forgotPassword}
