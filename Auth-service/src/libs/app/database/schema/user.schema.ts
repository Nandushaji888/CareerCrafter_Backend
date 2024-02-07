import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name :String,
    email: String,
    phone:String,
    password : String,
    isUser:{
        type:String,
        default:true
    }

})
const User = mongoose.model("User",userSchema)
export {
    User
}