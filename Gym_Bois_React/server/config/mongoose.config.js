const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/auth_demo",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("CONNECTED TO USER AUTH DB"))
.catch(err => console.log("Something went wrong when connecting to the database: ", err))