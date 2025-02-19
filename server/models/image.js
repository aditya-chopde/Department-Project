const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    phone: {
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
    time: {
        type: String,
    }
  }, {
    timestamps: true,
  });

const Image = mongoose.model("image-data", imageSchema)

module.exports = Image;