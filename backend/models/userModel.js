const Mongoose = require('mongoose');

const userSchema = Mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add the user"],
    },
    email:{
        type:String,
        required:[true,"please add the user email address"],
        unique:[true,"email address is already taken"],
    },
    password:{
        type:String,
        required:[true,"please add the password"]
    }
},
{
    timestamps:true
})

module.exports = Mongoose.model("user", userSchema)