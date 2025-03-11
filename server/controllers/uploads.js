const Image = require("../models/image");
const TextData = require("../models/textData");
const User = require("../models/user");
const { sendTextPostRequestEmail, sendImagePostRequestEmail } = require("../sendemail");

async function submitImage(req, res) {
    try {
        const { title, user, file_image } = req.body;
        const {originalname, filename, size} = req.file;
        const path = `http://localhost:3000/uploads/${filename}`
        const getUser = await User.findById(user);
        const saveFile = await Image.create({
            name: getUser.name,
            department: getUser.department,
            year: getUser.year,
            title: title,
            originalName: originalname,
            fileName: filename,
            path: path,
            size: size,
            user: user,
            time: new Date()
        })

        sendImagePostRequestEmail(getUser, saveFile)

        return res.json({ success: true, message: "File Uploaded Successfully", file: saveFile})
    } catch (err) {
        return res.json({ success: false, message: "Error occurred", error: err.message })
    }
}

async function submitText(req, res) {
    try {
        const { user, title, description } = req.body;
        const getUser = await User.findById(user);
        const createTextData = await TextData.create({
            name: getUser.name,
            department: getUser.department,
            year: getUser.year,
            title: title,
            description: description,
            user: user,
        })

        sendTextPostRequestEmail(getUser, createTextData)

        return res.json({ success: true, message: "Text Data Added Successfully", data: createTextData, user: getUser });
    } catch (error) {
        return res.json({ success: false, message: "Error Occurred", error: err.message });
    }
}

async function getTextDataForAdmin(req, res){
    try {
        const getData = await TextData.find();
        return res.json({success: true, message: "Data Fetchde Successfully", data: getData});
    } catch (error) {
        return res.json({success: false, message: "Error Ocurred", error: error.message});
    }
}

async function getImageDataForAdmin(req, res){
    try {
        const getData = await Image.find();
        return res.json({success: true, message: "Data Fetched Successfully", data: getData});
    } catch (error) {
        return res.json({success: false, message: "Error Ocurred", error: error.message});
    }
}

module.exports = {
    submitImage,
    submitText,
    getTextDataForAdmin,
    getImageDataForAdmin,
}