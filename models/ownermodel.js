const mongoose = require("mongoose")

const ownerschema = mongoose.Schema({
    fullname : {type : String,
        trim : true,
        minlength :3
    },
    email : String,
    password : String,
    products : [],
    picture : String,
    gstin : String
})

module.exports = mongoose.model("owner",ownerschema)