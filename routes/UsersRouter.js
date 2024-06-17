const express = require("express")
const router = express.Router()
const {registeruser, loginuser,logout} = require("../controllers/authcontroller")

router.get("/",function(req,res){
    res.send("hey its working")
})

router.post("/register",registeruser)

router.post("/login",loginuser)

router.get("/logout",logout)

module.exports = router