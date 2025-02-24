const Image = require("../models/image");
const TextData = require("../models/textData");
const { adminNewTextData, userNewTextData } = require("../sendemail")

async function submitImage(req, res) {
    try {
        const { name, email, department, year, phone } = req.body;
        const { originalname, filename, size } = req.file;
        const path = `http://localhost:3000/uploads/${filename}`
        const saveFile = await Image.create({
            name: name,
            email: email,
            department: department,
            year: year,
            phone: phone,
            originalName: originalname,
            fileName: filename,
            path: path,
            size: size,
            time: new Date()
        })

        return res.json({ success: true, message: "File Uploaded Successfully", data: saveFile })
    } catch (err) {
        console.log(err.message)
        return res.json({ success: false, message: "Error occurred", error: err.message })
    }
}

async function submitText(req, res) {
    try {
        const { name, email, department, year, phone, title, description } = req.body;
        const createTextData = await TextData.create({
            name: name,
            email: email,
            department: department,
            year: year,
            phone: phone,
            title: title,
            description: description,
        })

        adminNewTextData(name, email, department, year, phone, title, description);
        userNewTextData(name, email, department, year, phone, title, description);

        return res.json({ success: true, message: "Text Data Added Successfully", data: createTextData });
    } catch (error) {
        return res.json({ success: false, message: "Error Occurred", error: err.message });
    }
}

module.exports = {
    submitImage,
    submitText,
}