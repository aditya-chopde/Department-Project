const bcrypt = require("bcrypt")
const User = require("../models/user");
const {sign} = require("../auth");
const { sendStudentRegistrationEmail } = require("../sendemail");
const TextData = require("../models/textData");
const Image = require("../models/image");

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
        sendStudentRegistrationEmail(createUser);
        return res.json({ success: true, message: "Request Send Successfully", createUser, token })

    } catch (err) {
        return res.json({ success: false, message: "Error Ocurred", error: err.message })
    }
}

async function handleUserLogin(req, res) {
    try {
        const {email, password} = req.body;
        const find = await User.findOne({
            email
         })

        if (!find) return res.json({success: false, message: "user not found" })

        const matchPass = await bcrypt.compare(password, find.password)
        const isApproved = find.status === "Approved";

        if (!matchPass) return res.json({ sucess: false, message: "something went wrong" })
        if (isApproved===false) return res.json({ sucess: false, message: "Not a Approved Student" })
        const token = sign(find);
        return res.json({ success: true, message: "User Found", find, token})

    } catch (err) {
        return res.json({ success: false, message: "Error Ocurred", error: err.message })
    }
}

async function getUsers(req, res){
    try {
        const getUsersData = await User.find();
        return res.json({success: true, message: "All Users are Fetched", users: getUsersData});
    } catch (error) {
        return res.json({success: false, message: "Error Ocurred", error: error.message});
    }
}

async function getTextData(req, res){
    try {
        const {id} = req.params;
        const getData = await TextData.find({user: id})
        return res.json({success: true, message: "All Posts are Fetched", posts: getData});
    } catch (error) {
        return res.json({success: false, message: "Error Ocurred", error: err.message});
    }
}

async function getImageData(req, res){
    try {
        const {id} = req.params;
        const getData = await Image.find({user: id})
        return res.json({success: true, message: "All Posts are Fetched", posts: getData});
    } catch (error) {
        return res.json({success: false, message: "Error Ocurred", error: err.message});
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
    getUsers,
    getTextData,
    getImageData,
}