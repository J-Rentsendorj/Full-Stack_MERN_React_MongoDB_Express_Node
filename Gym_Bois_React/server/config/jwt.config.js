const jwt = require("jsonwebtoken");


module.exports.authenticate = (req, res, next) => {
    console.log(req.cookies.usertoken)
    console.log("COOKIE: ", req.cookies)
    jwt.verify(req.cookies.usertoken, "SECRET_KEY", (err, payload) => {
        console.log(err)
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
}