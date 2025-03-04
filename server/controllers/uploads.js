const Image = require("../models/image");
const TextData = require("../models/textData");
const User = require("../models/user");
const { adminNewTextData, userNewTextData } = require("../sendemail")

async function submitImage(req, res) {
    try {
        const { title, user } = req.body;
        const { originalname, filename, size } = req.file;
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

        return res.json({ success: true, message: "File Uploaded Successfully", data: saveFile })
    } catch (err) {
        console.log(err.message)
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