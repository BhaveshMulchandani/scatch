const express = require("express")
const app = express()
const cookieparser = require("cookie-parser")
const path = require("path")
const db = require("./config/mongooseconnection")
const ownersRouter = require("./routes/ownersRouter")
const ProductsRouter = require("./routes/ProductsRouter")
const UsersRouter = require("./routes/UsersRouter")



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.use("/owners",ownersRouter)
app.use("/users",UsersRouter)
app.use("/products",ProductsRouter)

app.listen(3000)