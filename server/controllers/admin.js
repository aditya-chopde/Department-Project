const Image = require("../models/image");
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
        const approveLogin = await Image.findByIdAndUpdate(id, { status: "Approved" });
        return res.json({success: true, data: approveLogin})
    } catch (err) {
        return res.json({success: false, message: "Error Ocurreed", error: err.message})
    }
}

module.exports = {
    approveLoginHandler,
    rejectLoginHandler,
    approvePostHandler,
    rejectPostHandler,
}