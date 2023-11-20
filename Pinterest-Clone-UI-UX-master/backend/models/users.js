const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
   
    firstname: String,
    lastname: String,
    dob: String,
    email: String,
    password: String

})

const UserModel = mongoose.model("Users", UserSchema)
module.exports=UserModel