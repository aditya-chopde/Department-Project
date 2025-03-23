const mongoose = require("mongoose")

const blogDataSchema = new mongoose.Schema({
    name:{
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
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    status: {
        type: String,
        default: "Pending"
    },
}, {
    timestamps: true,
})

const BlogData = mongoose.model("blogData", blogDataSchema);

module.exports = BlogData;