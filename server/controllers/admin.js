const Image = require("../models/image");
const TextData = require("../models/textData");
const User = require("../models/user");

async function approveLoginHandler(res, res){
    try {
        const {id} = req.params;
        const approveLogin = await User.findByIdAndUpdate(id, { status: "Approved" });
        return res.json({success: true, data: approveLogin})
    } catch (err) {
        return res.json({success: false, message: "Error Ocurreed", error: err.message})
    }
}

async function rejectLoginHandler(res, res){
    try {
        const {id} = req.params;
        const approveLogin = await User.findByIdAndUpdate(id, { status: "Rejected" });
        return res.json({success: true, data: approveLogin})
    } catch (err) {
        return res.json({success: false, message: "Error Ocurreed", error: err.message})
    }
}

async function approvePostHandler(req, res){
    try {
        const {id} = req.params;
        const approveLogin = await Image.findByIdAndUpdate(id, { status: "Approved" });
        return res.json({success: true, data: approveLogin})
    } catch (err) {
        return res.json({success: false, message: "Error Ocurreed", error: err.message})
    }
}

async function rejectPostHandler(req, res){
    try {
        const {id} = req.params;
        const rejectPost = await Image.findByIdAndUpdate(id, { status: "Rejected" });
        return res.json({success: true, data: rejectPost})
    } catch (err) {
        return res.json({success: false, message: "Error Ocurreed", error: err.message})
    }
}

async function acceptTextDataHandler(req, res){
    try {
        const {id} = req.params;
        const acceptTextData = await TextData.findByIdAndUpdate(id, { status: "Approved" });
        return res.json({success: true, data: acceptTextData})
    } catch (err) {
        return res.json({success: false, message: "Error Ocurreed", error: err.message})
    }
}

async function rejectTextDataHandler(req, res){
    try {
        const {id} = req.params;
        const rejectTextData = await TextData.findByIdAndUpdate(id, { status: "Rejected" });
        return res.json({success: true, data: rejectTextData})
    } catch (err) {
        return res.json({success: false, message: "Error Ocurreed", error: err.message})
    }
}

module.exports = {
    approveLoginHandler,
    rejectLoginHandler,
    approvePostHandler,
    rejectPostHandler,
    acceptTextDataHandler,
    rejectTextDataHandler,
}