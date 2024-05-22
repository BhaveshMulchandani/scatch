const mongoose = require("mongoose")


const userschema = mongoose.Schema({
    fullname :  {type : String,
        trim : true,
        minlength :3
    },
    email : String,
    password : String,
    cart : [],
    isadmin : Boolean,
    orders : [],
    contact : Number,
    picture : String
})

module.exports = mongoose.model("user",userschema)