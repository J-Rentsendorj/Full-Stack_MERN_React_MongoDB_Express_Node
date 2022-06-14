const UserController=require("../controllers/user.controller")
const {authenticate} = require("../config/jwt.config")

module.exports = app => {
    app.post("/api/users/register", UserController.register),
    app.post("/api/users/login", UserController.login),
    // PROTECTED ROUTE
    app.get("/api/users/", authenticate, UserController.getAll),
    app.get("/api/users/:user_id", UserController.getOne),
    app.delete("/api/users/logout", UserController.logout)
    app.delete("/api/users/:user_id", UserController.delete)
    app.get("/api/user/login", UserController.oneUser)
} 