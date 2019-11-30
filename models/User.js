const mongoose=require("mongoose")
const Shema=mongoose.Shema
const UserShema=new Shema({
  name:{
    type:String,
    required:True
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
date:{
type:Date,
default:Date.now
}})
module.exports=User=mongoose.model("users",UserShema)
