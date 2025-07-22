const express = require("express")
const assetmodel = require("../Model/assets")
const booking=require("../Model/booking")
const users=require("../Model/userdetails")
const router = express.Router()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
var multer = require('multer');
var path = require('path')
const { check, validationResult } = require('express-validator');
const { countReset } = require("console")


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assetuploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'userprofiles/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage });
router.get("/view_asset", async (req, res) => {

  try {
    const asset = await assetmodel.find().exec();
    res.json(asset);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch assets", details: error.message });
  }
});

router.post("/add_asset", upload.single("assetimage"), async (req, res) => {
   if (!req.headers.authorization) {
    return res.json({ message: "Unauthorised" })
  }
  try {
     const token = req.headers.authorization.slice(7)
  const data = jwt.verify(token, process.env.JWT_KEY);
    const new_asset = new assetmodel({
      name: req.body.name,
      type: req.body.type,
      capacity: req.body.capacity,
      availability: req.body.availability,
      description: req.body.description,
      assetimage: req.file ? req.file.filename : 'default.jpg'
    })
    await new_asset.save()
    res.json({ message: "successful" })
  }
  catch (err) {
    console.log(err)
  }

})
router.put("/edit_asset/:id", upload.single("assetimage"), async (req, res) => {
  if (!req.headers.authorization) {
    return res.json({ message: "Unauthorised" })
  }
  console.log(req.headers.authorization)
  const token = req.headers.authorization.slice(7)
  const data = jwt.verify(token, process.env.JWT_KEY);
  const cid = req.params.id;
  const editasset = await assetmodel.findById(data.id);
  let updateData = {
    name: req.body.name,
    type: req.body.type,
    capacity: req.body.capacity,
    availability: req.body.availability,
    description: req.body.description,
    assetimage: req.file ? req.file.filename : editasset.assetimage ||'default.jpg'

  }
  let value = await assetmodel.findByIdAndUpdate(cid, updateData, { new: true })
  res.send(value)
})
router.get("/view_asset/:id",async(req,res)=>{
   if (!req.headers.authorization) {
          res.status(400).json({ message: "error" })
          return;
  
      }
      token = req.headers.authorization.slice(7)
      let data = jwt.verify(token, process.env.JWT_KEY)
      const cid = req.params.id
      const asset=await assetmodel.findOne({_id:cid})
      res.send(asset)
})
router.delete("/delete_asset/:id",async (req,res)=>{
  if(!req.headers.authorization)
  {
      res.status(400).json({ message: "error" })
      return;
  }
   token = req.headers.authorization.slice(7)
  let data = jwt.verify(token, process.env.JWT_KEY)
  const cid = req.params.id
  try{
    const del=await assetmodel.deleteOne({_id:cid},{ new: true }).exec()
    res.send({message:"success"})
  }
  catch(err)
  {
    console.log(err)
    res.send(err)
  }
})
router.get("/view_booking",async (req,res)=>{
     if (!req.headers.authorization) {
          return res.status(401).json({ message: "Unauthorized" });
      }
       const token = req.headers.authorization.slice(7);
      const data = jwt.verify(token, process.env.JWT_KEY);
      const book= await booking.find().populate("asset").populate("user");
      return res.json(book)
  })
  router.get("/view_users",async (req,res)=>{
     if (!req.headers.authorization) {
          return res.status(401).json({ message: "Unauthorized" });
      }
      const token = req.headers.authorization.slice(7);
      const data = jwt.verify(token, process.env.JWT_KEY);
      const user=await users.find().exec()
      return res.json(user)
  })
  router.post("/add_user",[upload.single("profile"), check('email').isEmail().isLength({ min: 10, max: 30 }),
  check('password', 'Password length should be 8 to 10 characters')
      .isLength({ min: 8, max: 15 }),
  check('username').isLength({ min: 4 }),
  
  ],async (req,res)=>{
     if (!req.headers.authorization) {
          return res.status(401).json({ message: "Unauthorized" });
      }
      const token = req.headers.authorization.slice(7);
      const data = jwt.verify(token, process.env.JWT_KEY);
       const hash = await bcrypt.hash(req.body.password, 10);
      const newuser=new users({
        username:req.body.username,
        email:req.body.email,
        password:hash,
        role:req.body.role,
        profile:req.file ? req.file.filename :'defaultprofile.jpg'
      })
      await newuser.save()
      res.json({message:"successful"})
  })
  router.put("/edit_users/:id",async (req,res)=>{
     if (!req.headers.authorization) {
    return res.json({ message: "Unauthorised" })
  }
  console.log(req.headers.authorization)
  const token = req.headers.authorization.slice(7)
  const data = jwt.verify(token, process.env.JWT_KEY);
  const cid=req.params.id
  const editusers={
    username:req.body.username,
    email:req.body.email,
    role:req.body.role
  }
  let value=await users.findByIdAndUpdate(cid,editusers,{new:true})
  res.send(value)
  })
  router.get("/view_user/:id",async (req,res)=>{
     if (!req.headers.authorization) {
    return res.json({ message: "Unauthorised" })
  }
  console.log(req.headers.authorization)
  const token = req.headers.authorization.slice(7)
  const cid=req.params.id
  const user=await users.findOne({_id:cid})
  res.send(user)
  })
  router.delete("/delete_user/:id",async (req,res)=>{
     if (!req.headers.authorization) {
    return res.json({ message: "Unauthorised" })
  }
  console.log(req.headers.authorization)
  const token = req.headers.authorization.slice(7)
  const cid=req.params.id
  try{
    const del=await users.deleteOne({_id:cid},{ new: true }).exec()
    res.send({message:"success"})
  }
  catch(err)
  {
    console.log(err)
    res.send(err)
  }
  })
router.get("/count",async (req,res)=>{
  let [resourcecount,bookingcount]=await Promise.all([assetmodel.countDocuments(),booking.countDocuments()])
  res.json({resourcecount,bookingcount})
})

module.exports = router;