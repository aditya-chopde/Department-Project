const Image = require("../models/image");
const TextData = require("../models/textData");
const User = require("../models/user");
const { userNewTextDataStatus, sendEmailUser, userNewImageEmailStatus, adminNewTextDataStatus } = require("../sendemail");

async function approveLoginHandler(res, res) {
    try {
        const { id } = req.params;
        const approveLogin = await User.findByIdAndUpdate(id, { status: "Approved" });
        // sendEmailUser(approveLogin.email);
        return res.json({ success: true, data: approveLogin })
    } catch (err) {
        return res.json({ success: false,  message: "Approved Successfully", message: "Error Ocurreed", error: err.message })
    }
}

async function rejectLoginHandler(res, res) {
    try {
        const { id } = req.params;
        const approveLogin = await User.findByIdAndUpdate(id, { status: "Rejected" });
        return res.json({ success: true,  message: "Rejected", data: approveLogin })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurreed", error: err.message })
    }
}

async function approvePostHandler(req, res) {
    try {
        const { id } = req.params;
        const acceptImagePostRequest = await Image.findByIdAndUpdate(id, { status: "Approved" });

        // Send Email to the user
        // userNewImageEmailStatus(acceptImagePostRequest.name, acceptImagePostRequest.email, acceptImagePostRequest.department, acceptImagePostRequest.phone, acceptImagePostRequest.path, "Accepted")
        // Send Email to the Admin
        // adminNewTextDataStatus(acceptImagePostRequest.name, acceptImagePostRequest.email, acceptImagePostRequest.department, acceptImagePostRequest.phone, acceptImagePostRequest.path, "Accepted")

        return res.json({ success: true,  message: "Approved Successfully", data: acceptImagePostRequest })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurreed", error: err.message })
    }
}

async function rejectPostHandler(req, res) {
    try {
        const { id } = req.params;
        const rejectPost = await Image.findByIdAndUpdate(id, { status: "Rejected" });

        // Send Email to the user
        // userNewImageEmailStatus(rejectPost.name, rejectPost.email, rejectPost.department, rejectPost.phone, rejectPost.path, "Rejected")
        // Send Email to the Admin
        // adminNewTextDataStatus(rejectPost.name, rejectPost.email, rejectPost.department, rejectPost.phone, rejectPost.path, "Rejected")

        return res.json({ success: true,  message: "Rejected", data: rejectPost })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurreed", error: err.message })
    }
}

async function acceptTextDataHandler(req, res) {
    try {
        const { id } = req.params;
        const acceptTextData = await TextData.findByIdAndUpdate(id, { status: "Approved" });

        // Sending email to the user
        // userNewTextDataStatus(acceptTextData.name, acceptTextData.email, acceptTextData.department, acceptTextData.phone, acceptTextData.title, acceptTextData.description, "Accepted")
        // Sending email to admin
        // adminNewTextDataStatus(acceptTextData.name, acceptTextData.email, acceptTextData.department, acceptTextData.phone, acceptTextData.title, acceptTextData.description, "Accepted")
        return res.json({ success: true, message: "Approved Successfully", data: acceptTextData })
    } catch (err) {
        return res.json({ success: false, message: "Error Ocurreed", error: err.message })
    }
}

async function rejectTextDataHandler(req, res) {
    try {
        const { id } = req.params;
        const rejectTextData = await TextData.findByIdAndUpdate(id, { status: "Rejected" });

        // Sending email to the user
        // userNewTextDataStatus(acceptTextData.name, acceptTextData.email, acceptTextData.department, acceptTextData.phone, acceptTextData.title, acceptTextData.description, "Rejected")
        // Sending email to admin
        // adminNewTextDataStatus(acceptTextData.name, acceptTextData.email, acceptTextData.department, acceptTextData.phone, acceptTextData.title, acceptTextData.description, "Rejected")
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