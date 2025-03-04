const jwt = require("jsonwebtoken")
const secret_key = "Aditya@123";

function sign(user){
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
    }, secret_key);
}

function verify(token){
    return jwt.verify(token, secret_key)
}

module.exports = {
    sign,
    verify,
}