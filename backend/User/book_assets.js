const express=require("express")
const assetmodel=require("../Model/assets")
const userdetails=require("../Model/userdetails")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
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
router.get("/view_assets/:id",async(req,res)=>{
     if (!req.headers.authorization) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = req.headers.authorization.slice(7);
        const data = jwt.verify(token, process.env.JWT_KEY);
        const cid=req.params.id;
        const asset=await assetmodel.findOne({_id:cid})
        return res.json(asset)
})
module.exports=router;