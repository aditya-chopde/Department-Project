const mongoose = require("mongoose")

const textDataSchema = new mongoose.Schema({
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
    description: {
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

const TextData = mongoose.models.task || mongoose.model("textData", textDataSchema);

module.exports = TextData;