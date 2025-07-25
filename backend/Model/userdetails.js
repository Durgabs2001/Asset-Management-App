const mongoose=require("mongoose")
const usermodel=mongoose.Schema({
    username:{
       type: String,
       required:true
    },
    email:
    {
    type:String,
    required:true
    },
    password:{
        type:String,
        required:true
    },
    profile:String,
    role:String,
    login_time:Date

})
module.exports=mongoose.model("userdetails",usermodel)