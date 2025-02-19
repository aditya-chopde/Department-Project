const mongoose = require("mongoose")

const textDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const TextData = mongoose.model("textData", textDataSchema);

module.exports = TextData;