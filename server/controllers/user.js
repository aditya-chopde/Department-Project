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
        return res.json({ success: true, message: "Request Send Successfully", createUser, token })

    } catch (err) {
        return res.json({ success: false, message: "Error Ocurred", error: err.message })
    }
}

async function handleUserLogin(req, res) {
    const {email, password} = req.body;

    try {
        const find = await User.findOne({
            email
         })

        if (!find) return res.json({success: false, message: "user not found" })

        const matchPass = await bcrypt.compare(password, find.password)
        const isApproved = find.status === "Approved";

        if (!matchPass) return res.json({ sucess: false, message: "something went wrong" })
        if (isApproved===false) return res.json({ sucess: false, message: "Not a Approved Student" })
        const token = sign(find);
        return res.json({ success: true, find, token})

    } catch (err) {
        return res.json({ success: false, message: "Error Ocurred", error: err.message })
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}