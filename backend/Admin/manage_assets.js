const express=require("express")
const assetmodel=require("../Model/assets")
const router=express.Router()

var multer = require('multer');
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assetuploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) 
  }
})

var upload = multer({ storage: storage });
router.get("/view_asset",async (req,res)=>{
   
  try {
    const asset = await assetmodel.find().exec();
    res.json(asset);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch assets", details: error.message });
  }
});

router.post("/add_asset",upload.single("assetimage"),async (req,res)=>{
    try{
        const new_asset=new assetmodel({
        name:req.body.name,
        type:req.body.type,
        capacity:req.body.capacity,
        availability:req.body.availability,
        description:req.body.description,
        assetimage:req.file ? req.file.filename : 'default.jpg' 
    })
    await new_asset.save()
    res.json({message:"successful"})
    }
    catch(err)
    {
        console.log(err)
    }
    
})

module.exports=router;