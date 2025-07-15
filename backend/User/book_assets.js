const express=require("express")
const assetmodel=require("../Model/assets")
const userdetails=require("../Model/userdetails")
const booking=require("../Model/booking")
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
router.post("/book_asset/:id",async (req,res)=>{
  if (!req.headers.authorization) {
          return res.status(401).json({ message: "Unauthorized" });
      }
      const asset=req.params.id
      const token = req.headers.authorization.slice(7);
      const data = jwt.verify(token, process.env.JWT_KEY);
      const { start_date, end_date } = req.body;
      const start = new Date(start_date);
      const end = new Date(end_date);
      const user=data.id;

    if (start >= end) {
      return res.status(400).json({ message: 'Start time must be before end time' });
    }
    const conflict = await booking.findOne({
      asset,
      $or: [
        { start_date: { $lt: end }, end_date: { $gt: start } }
      ]
    });

    if (conflict) {
      return res.status(409).json({ message: 'Time slot already booked' });
    }

    const newbooking = new booking({
      start_date: start,
      end_date: end,
      user,
      asset,
      status: 'Booked'
    });

    await newbooking.save();
    res.status(201).json({ message: 'Booking successful', booking });

  });
  router.get("/view_booking",async (req,res)=>{
     if (!req.headers.authorization) {
          return res.status(401).json({ message: "Unauthorized" });
      }
       const token = req.headers.authorization.slice(7);
      const data = jwt.verify(token, process.env.JWT_KEY);
      const book= await booking.find({user:data.id}).populate("asset");
      return res.json(book)
  })

module.exports=router;