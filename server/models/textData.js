const mongoose = require("mongoose")

const textDataSchema = new mongoose.Schema({
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

const TextData = mongoose.model("textData", textDataSchema);

module.exports = TextData;