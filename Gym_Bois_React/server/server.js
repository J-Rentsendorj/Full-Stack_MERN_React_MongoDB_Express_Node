// 1a. IMPORT YOUR DEPENDECIES
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")


// 1.5a CONFIGURE YOUR MONGOOSE
require("./config/mongoose.config")


// 2a. CONFIGURE YOUR EXPRESS
app.use(cors({credentials:true,origin:"http://localhost:3000"}))
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cookieParser())

const userRoutes=require("./routes/user.routes")
userRoutes(app)


// 4a. RUN YOUR EXPRESS SERVER
app.listen( port, () => console.log(`Listening on port: ${port}`) );