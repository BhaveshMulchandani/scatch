const usermodel = require("../models/usermodel") 
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {generatetoken} = require("../utils/generatetoken")

module.exports.registeruser = async function(req,res){
    try {
 
     let {email,password,fullname} = req.body

     let user = await usermodel.findOne({email:email})
     if(user) return res.status(401).send("you already have an account,please login.")
 
     bcrypt.genSalt(10,function(err,salt){
         bcrypt.hash(password,salt, async function(err,hash){
             if(err) return res.send(err.message)
             else{
                 let user = await usermodel.create({
                     email,
                     password : hash,
                     fullname,
                 })
 
                 let token = generatetoken(user)
                 res.cookie("token",token)
                 res.send("user created successfully")
             }
         })
     })
 
    } catch (err) {
         res.send(err.message);
    }
 }


 module.exports.loginuser = async function(req,res){
    let {email,password} = req.body

   let user = await usermodel.findOne({email:email})
   if(!user) return res.send("Email or password incorrect")

    bcrypt.compare(password,user.password,function(err,result){
        if(result){
            let token = generatetoken(user)
            res.cookie("token",token)
            res.send("you can login")
        }
        else{
            return res.send("Email or password incorrect")
        }
    })
 }

module.exports.logout = function(req,res){
    res.cookie("token","")
    res.redirect("/")
}