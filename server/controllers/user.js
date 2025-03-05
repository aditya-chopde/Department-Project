const bcrypt = require("bcrypt")
const User = require("../models/user");
const {sign} = require("../auth");
const { sendEmailAdminNewLogin } = require("../sendemail");

async function handleUserSignup(req, res) {
    const { name, email, department, year, phone, password } = req.body;
    try {
        const exists = await User.findOne({ email })
        if (exists) return res.json({ success: false, message: "User already exists", action: "Got to the login page" })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const createUser = await User.create({
            name, email, department, year, phone, password: hash,
        })

        const token = sign(createUser);
        sendEmailAdminNewLogin(createUser);
        return res.send({ success: true, createUser, token })

    } catch (err) {
        return res.send({ success: false, error: err.message })
    }
}

async function handleUserLogin(req, res) {
    const {name, email, password} = req.body;

    try {
        const find = await User.findOne({
            email
         })

        if (!find) return res.json({success: false, message: "user not found" })

        const matchPass = await bcrypt.compare(password, find.password)

        if (!matchPass) return res.json({ sucess: false, message: "something went wrong" })
        const token = sign(find);
        return res.json({ success: true, find, token})

    } catch (err) {
        return res.json({ success: false, error: err.message })
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}