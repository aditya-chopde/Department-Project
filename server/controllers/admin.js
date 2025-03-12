const Image = require("../models/image");
const TextData = require("../models/textData");
const User = require("../models/user");
const { sendStudentRegistrationStatusEmail, sendImagePostRequestStatusEmail, sendTextPostRequestStatusEmail } = require("../sendemail");

async function approveLoginHandler(req, res) {
    try {
        const { id } = req.params;
        const approveLogin = await User.findByIdAndUpdate(id, { status: "Approved" });
        sendStudentRegistrationStatusEmail(approveLogin, "Approved")
        return res.json({ success: true, message: "Approved", data: approveLogin })
    } catch (err) {
        return res.json({ success: false,  message: "Approved Successfully", message: "Error Ocurreed", error: err.message })
    }
}

async function rejectLoginHandler(res, res) {
    try {
        const { id } = req.params;
        const rejectLogin = await User.findByIdAndUpdate(id, { status: "Rejected" });
        sendStudentRegistrationStatusEmail(rejectLogin, "Rejected")
        return res.json({ success: true,  message: "Rejected", data: rejectLogin })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurred", error: err.message })
    }
}

async function approvePostHandler(req, res) {
    try {
        const { id } = req.params;
        const acceptImagePostRequest = await Image.findByIdAndUpdate(id, { status: "Approved" });
        const getUser = await User.findById(acceptImagePostRequest.user);
        sendImagePostRequestStatusEmail(getUser, acceptImagePostRequest, "Approved");

        return res.json({ success: true,  message: "Approved Successfully", data: acceptImagePostRequest })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurreed", error: err.message })
    }
}

async function rejectPostHandler(req, res) {
    try {
        const { id } = req.params;
        const rejectPost = await Image.findByIdAndUpdate(id, { status: "Rejected" });
        const getUser = await User.findById(rejectPost.user);

        sendImagePostRequestStatusEmail(getUser, rejectPost, "Rejected");
        return res.json({ success: true,  message: "Rejected", data: rejectPost })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurreed", error: err.message })
    }
}

async function acceptTextDataHandler(req, res) {
    try {
        const { id } = req.params;
        const acceptTextData = await TextData.findByIdAndUpdate(id, { status: "Approved" });
        const getUser = await User.findById(acceptTextData.user);

        sendTextPostRequestStatusEmail(getUser, rejectTextData, "Approved");
        return res.json({ success: true, message: "Approved Successfully", data: acceptTextData })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurreed", error: err.message })
    }
}

async function rejectTextDataHandler(req, res) {
    try {
        const { id } = req.params;
        const rejectTextData = await TextData.findByIdAndUpdate(id, { status: "Rejected" });
        const getUser = await User.findById(rejectTextData.user);
        sendTextPostRequestStatusEmail(getUser, rejectTextData, "Rejected");
        return res.json({ success: true,  message: "Rejected", data: rejectTextData })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurreed", error: err.message })
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