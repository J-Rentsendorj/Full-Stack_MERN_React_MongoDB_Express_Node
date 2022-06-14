const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

// DEFINE
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        // VALIDATES FOR EMAIL REGEX
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enteravalid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, { timestamps: true })

// CREATEATEMPORARY CONFIRM PASSWORD ATTRIBUTE IN OUR SCHEMA
UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value);

// CREATE VALIDATIONS FOR THE CONFIRM PASSWORD
UserSchema.pre["validate",function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword","Password and confirm password must match")
    }
    next()
}]
// BEFORE SAVING THE USER,SWAP OUT PASSWORD WITH HASED PASSWORD
UserSchema.pre("save",function(next){
    bcrypt.hash(this.password, 10)
        .then(hashedPassword=>{
            this.password=hashedPassword
            next()
        })
})
// REGISTER THE SCHEMA 
module.exports.User=mongoose.model("User", UserSchema)
