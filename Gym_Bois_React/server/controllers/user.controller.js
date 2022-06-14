const { User } = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

module.exports.register = (req, res) => {
    User.exists({email : req.body.email})
        .then(userExists => {
            // IS USER EXISTS, SEND BACK AN ERROR
            if(userExists){
                return Promise.reject({
                    errors: {"duplicate": "Email already taken"}
                })
            }
            else{
                const user = new User(req.body)
                return user.save()
            }
        })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}
        

module.exports.login = (req,res) => {
    // CHECK TO SEE IF THE EMAIL EXISTS
    User.findOne({email : req.body.email})
        .then(user => {
            if(user === null){
                res.status(400).json({msg: "INVALID LOGIN"})
            }
            else{
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if(passwordIsValid){
                            const newJWT = jwt.sign({
                                _id:user._id
                            }, "SECRET_KEY")
                            res.cookie("usertoken", newJWT, {httpOnly:true}).json("success")
                        }
                        else{
                            res.status(400).json({msg:"INVALID ATTEMPT"})
                        }
                    })
                    .catch(err => res.status(400).json({msg: "Password is wrong"}))
            }
        })

}
module.exports.getAll=(req,res)=>{
    User.find()
    // {_id:req.params.user_id}
        .then(allUser=>res.json(allUser))
        .catch(err=>res.status(400).json(err))
}

module.exports.getOne=(req,res)=>{
    User.findOne({_id:req.params.user_id})
    // {_id:req.params.user_id}
        .then(oneUser=>res.json(oneUser))
        .catch(err=>res.status(400).json(err))
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

module.exports.delete = (req, res) => {
    User.deleteOne({_id:req.params.user_id})
    .then(deleteUser=>res.json(deleteUser))
    .catch(err=>res.status(400).json(err))
}
module.exports.oneUser = (req, res) => {
    User.findOne(req.body.email)
        .then(oneUser => res.json(oneUser))
        .catch(err => res.status(400).json(err))
} 