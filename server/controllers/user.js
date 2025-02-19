const bcrypt = require("bcrypt")
const User = require("../models/user");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        const exists = await User.findOne({ email })
        if (exists) return res.json({ success: false, message: "User already exists", action: "Got to the login page" })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const createUser = await User.create({
            name,
            email,
            password: hash,
        })

        return res.send({ success: true, createUser })

    } catch (err) {
        return res.send({ success: false, error: err })
    }
}

async function handleUserLogin(req, res) {
    const {email, password} = req.body;

    try {
        const find = await User.findOne({
            email
         })

        if (!find) return res.json({success: false, msg: "user not found" })

        const matchPass = await bcrypt.compare(password, find.password)

        if (!matchPass) return res.json({ sucess: false, message: "something went wrong" })

        return res.json({ success: true, find})

    } catch (err) {
        return res.json({ success: false, error: err })
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}