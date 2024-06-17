const express = require("express")
const app = express()
const cookieparser = require("cookie-parser")
const path = require("path")
const expressSession = require("express-session")
const flash = require("connect-flash")
const db = require("./config/mongooseconnection")
const ownersRouter = require("./routes/ownersRouter")
const ProductsRouter = require("./routes/productsRouter")
const UsersRouter = require("./routes/usersRouter")
const rootRouter = require("./routes/index")
require("dotenv").config()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
)
app.use(flash())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.use("/", rootRouter)
app.use("/owners",ownersRouter)
app.use("/users",UsersRouter)
app.use("/products",ProductsRouter)

app.listen(3000)