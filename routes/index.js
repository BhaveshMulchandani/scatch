const express = require("express")
const router =  express.Router()
const isloggedin = require("../middleware/isloggedin")
const productmodel = require("../models/productmodel")

router.get("/",function(req,res){
    let error = req.flash("error")
    res.render("index",{error})
})

router.get("/shop",isloggedin,async function(req,res){
    let products = await productmodel.find()
    res.render("shop",{products})
})


module.exports = router
