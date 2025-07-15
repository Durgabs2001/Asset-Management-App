const express = require("express")
const assetmodel = require("../Model/assets")
const booking=require("../Model/booking")
const router = express.Router()
const jwt=require("jsonwebtoken")
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

module.exports = router;