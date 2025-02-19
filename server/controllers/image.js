const { model } = require("mongoose");

async function submitImage(req, res) {
    try {
        const { name, email, department, year, phone } = req.body;
        const { originalname, filename, size } = req.file;
        const path = `http://localhost:3000/uploads/${filename}`
        const saveFile = await Poster.create({
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

        return res.json({ success: true, message: "File Uploaded Successfully" })
    } catch (err) {
        console.log(err.message)
        return res.json({ success: false, message: "Error occurred", error: err.message })
    }
}

module.exports = {
    submitImage,
}