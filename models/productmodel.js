const mongoose = require("mongoose")

const productschema = mongoose.Schema({
    image : Buffer,
    name : String,
    price : Number,
    discount : {type : Number,default : 0},
    bgcolor : String,
    panecolor : String,
    textcolor : String
})

module.exports = mongoose.model("product",productschema)