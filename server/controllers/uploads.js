const { sign } = require("../auth");
const BlogData = require("../models/blog");
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
            year: getUser.year,
            title: title,
            description: description,
            user: user,
        })

        sendTextPostRequestEmail(getUser, createTextData)

        return res.json({ success: true, message: "Text Data Added Successfully", data: createTextData, user: getUser });
    } catch (err) {
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

async function handleAdminLogin(req, res){
    try {
        const {email, password} = req.body;
        if(email==="admin@gmail.com" && password==="admin"){
            const token = sign({email, password});
            return res.json({success: true, token, message: "Login Successful"});
        } else {
            return res.json({success: false, message: "Invalid Credentials"});
        }   
    } catch (error) {
        return res.json({success: false, message: "Error Occurred", error: error.message});
    }
}

async function addBlog(req, res) {
    try {
        const { user, title, content } = req.body;
        const getUser = await User.findById(user);
        const createBlog = await BlogData.create({
            name: getUser.name,
            department: getUser.department,
            year: getUser.year,
            title: title,
            content: content,
            user: user,
        })

        // sendTextPostRequestEmail(getUser, createTextData)

        return res.json({ success: true, message: "Blog Added Successfully", data: createBlog, user: getUser });
    } catch (err) {
        return res.json({ success: false, message: "Error Occurred", error: err.message });
    }
}

async function editTextData(req,res){
    try {
        const {id} = req.params;
        const { user, title, content } = req.body;
        const context = {
            user, title, content
        }
        const editedPost = await TextData.findByIdAndUpdate(id, context, {new: true, runValidators: true});
        return res.json({success: true, message: "TextData Updated Successfully", data: editedPost});
    } catch (error) {
        return res.json({ success: false, message: "Error Occurred", error: error.message });
    }
}

async function editImageData(req,res){
    try {
        const {id} = req.params;
        const { title, user, file_image } = req.body;
        const {originalname, filename, size} = req.file;
        const path = `http://localhost:3000/uploads/${filename}`
        const context = {
            title: title,
            originalName: originalname,
            fileName: filename,
            path: path,
            size: size,
            user: user,
            time: new Date()
        }
        const editedPost = await Image.findByIdAndUpdate(id, context, {new: true, runValidators: true});
        return res.json({success: true, message: "TextData Updated Successfully", data: editedPost});
    } catch (error) {
        return res.json({ success: false, message: "Error Occurred", error: error.message });
    }
}
async function editBlogData(req, res) {
    try {
        const {id} = req.params;
        const { user, title, content } = req.body;
        const context = {
            title: title,
            content: content,
            user: user,
        }

        const editedPost = await BlogData.findByIdAndUpdate(id, context, {new: true, runValidators: true});
        return res.json({success: true, message: "TextData Updated Successfully", data: editedPost});
    } catch (err) {
        return res.json({ success: false, message: "Error Occurred", error: err.message });
    }
}

module.exports = {
    submitImage,
    submitText,
    getTextDataForAdmin,
    getImageDataForAdmin,
    handleAdminLogin,
    addBlog,
    editTextData,
    editImageData,
    editBlogData,
}