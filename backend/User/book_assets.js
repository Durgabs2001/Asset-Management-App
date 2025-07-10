const express=require("express")
const assetmodel=require("../Model/assets")
const userdetails=require("../Model/userdetails")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { check, validationResult } = require('express-validator');
const router=express.Router()
const {env}=require('dotenv').config();
var multer = require('multer');
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'profileuploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) 
  }
})

var upload = multer({ storage: storage });

router.post("/user/register", [ upload.single("profile"),check('email').isEmail().isLength({ min: 10, max: 30 }),
    check('password', 'Password length should be 8 to 10 characters')
        .isLength({ min: 8, max: 15 }),
    check('username').isLength({ min: 4 }),
   
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ errors: errors.array() });
    }
    try{
        const user= await userdetails.findOne({email:req.body.email});
        console.log(user)
        if(user)
        {
            return res.send("User already found")
        }
        const hash=await bcrypt.hash(req.body.password,10);
        const register=new userdetails({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            profile:req.file ? req.file.filename : 'default.jpg' 
        })
        await register.save();
        res.send("Registration successful")
    }
    catch(err)
    {
        console.error(err);
        return res.status(500).send({ message: "Server error" ,error:err.message});
    }

})
router.post("/user/verify",async(req,res)=>{
    const user= await userdetails.findOne({email:req.body.email})
    if(!user)
    {
        res.send("User not found")
    }
    else
    {
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
            if (err) {
                console.log(err)
                res.status(400).json({error:"error"})
            }
            if(result)
            {
                const token=jwt.sign({email:user.email, id: user._id }, process.env.JWT_KEY)
                res.send({token})
            }
             else {
                res.status(400).send({ message: "Password incorrect" })
            }
        })
    }
})
router.get("/view_assets",async (req,res)=>{
   if (!req.headers.authorization) {
                return res.status(401).json({ message: "Unauthorized" });
    }
  try {
    const asset = await assetmodel.find().exec();
    res.json(asset);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch assets"});
  }
});
module.exports=router;