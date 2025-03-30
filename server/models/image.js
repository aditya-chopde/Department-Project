const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    originalName: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    time: {
        type: String,
    },
    status: {
        type: String,
        default: "Pending"
    }
}, {
    timestamps: true,
});

const Image = mongoose.model("image-data", imageSchema)

module.exports = Image;