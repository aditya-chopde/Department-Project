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
    year: {
        type: String,
        required: true,
    },
    phone :{
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
    },
    isVerified: {
        type: String,
        default: "false"
    }
    
})

const User = mongoose.model("user", userSchema)

module.exports = User;