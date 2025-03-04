const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    status: {
        type: String,
        default: "Pending",
    }
})

const User = mongoose.model("user", userSchema)

module.exports = User;