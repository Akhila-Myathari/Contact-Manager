const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        requires:true,
        ref:"user"
    },
    name:{
        type: String,
        required:[true,"please add the contact name"],
    },
    email:{
        type:String,
        required:[true,"please add the contact email address"],
    },
    phone:{
        type:String,
        required:[true,"please add the contact phone number"],
    },
},
{
    timestamps:true,
});

module.exports = mongoose.model("Contact",contactSchema);