const mongoose=require("mongoose")
const assetSchema=mongoose.Schema({
    name:String,
    type:{
        type:String,
        enum:["Meeting room","Equipment","Vehicle"]

    },
    capacity:String,
    properties:String,
    availability:{
        type:String,
        enum:["Available","Booked","Maintenance"],
        default:"Available"
    },
    assetimage:String,
    description:String,
    location:String
})
const asset=mongoose.model("assets",assetSchema)
module.exports=asset;