const mongoose=require("mongoose")
const bookingSchema=mongoose.Schema({
    start_date:Date,
    end_date:Date,
    status:{
        type:String,
         enum:["Confirmed","Pending"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userdetails"
    },
    assets:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"assets"
    }
})
const booking=mongoose.model("bookings",bookingSchema)
module.exports=booking;
