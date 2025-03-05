const Image = require("../models/image");
const TextData = require("../models/textData");
const User = require("../models/user");
const { adminNewTextData, userNewTextData, adminNewImageEmail, userNewImageEmail } = require("../sendemail")

async function submitImage(req, res) {
    try {
        const { title, user, file_image } = req.body;
        const {originalname, filename, size} = req.file;
        console.log(req.file)
        const path = `http://localhost:3000/uploads/${filename}`
        const saveFile = await Image.create({
            title: title,
            originalName: originalname,
            fileName: filename,
            path: path,
            size: size,
            user: user,
            time: new Date()
        })

        const getUser = await User.findById(user);
        adminNewImageEmail(getUser.name, getUser.email, getUser.department, getUser.phone, title, path)
        userNewImageEmail(getUser.name, getUser.email, getUser.department, getUser.phone, title, path)

        return res.json({ success: true, message: "File Uploaded Successfully", file: saveFile})
    } catch (err) {
        return res.json({ success: false, message: "Error occurred", error: err.message })
    }
}

async function submitText(req, res) {
    try {
        const { user, title, description } = req.body;
        const createTextData = await TextData.create({
            title: title,
            description: description,
            user: user,
        })

        const getUser = await User.findById(user);

        adminNewTextData(getUser.name, getUser.email, getUser.department, getUser.year, getUser.phone, title, description);
        userNewTextData(getUser.name, getUser.email, getUser.department, getUser.year, getUser.phone, title, description);

        return res.json({ success: true, message: "Text Data Added Successfully", data: createTextData, user: getUser });
    } catch (error) {
        return res.json({ success: false, message: "Error Occurred", error: err.message });
    }
}

module.exports = {
    submitImage,
    submitText,
}