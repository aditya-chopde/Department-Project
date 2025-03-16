const bodyParser = require("body-parser");
const express = require("express")
const cors = require("cors")
const { connectDb } = require("./connectdb");
const user = require("./routes/user");
const uploads = require("./routes/uploads")
const admin = require("./routes/admin");
const { verify } = require("./auth");
const User = require("./models/user");
const bcrypt = require("bcrypt")
require('dotenv').config();
const app = express()
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/user", user)
app.use("/api/upload", uploads)
app.use("/api/admin", admin);
app.use("/uploads", express.static("uploads"));

connectDb("mongodb://localhost:27017/cm").then(() => {
    console.log("Database Connected")
}).catch((err) => {
    console.log("Error Occurred: " + err.message)
})

app.get("/", async (req, res) => {
    sendImagePostRequestEmail({
        name: "Aditya Chopde",
        email: "its.adityac@gmail.com",
        department: "Computer Science",
        phone: "9657393894",
        year: "3rd Year"
    }, {
        title: "Title of the image",
        path: "http://localhost:3000/uploads/file_image-1741523495490-983847057.jpg",
        status: "Pending"
      })
    return res.json({ success: true, message: "API Working & Email Sent" })
})

app.post("/api/authenticate-admin", async (req, res) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        const verifyToken = verify(token);
        if(verifyToken.email === "admin@gmail.com" && verifyToken.password === "admin"){
            return res.json({ success: true, message: "Admin Authenticated", verifyToken})
        }else{
            return res.json({ success: false, message: "Admin Not Authenticated", verifyToken})
        }
    } catch (error) {
        return res.json({ success: false, message: "Error Ocurred", error: error.message });
    }
})

app.post("/api/authenticate-user", async (req, res) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if(!token) return res.json({ success: false, message: "Token Not Found" });
        const verifyToken = verify(token);
        const findEmail = await User.findOne({ email: verifyToken.email });
        if(!findEmail) return res.json({ success: false, message: "User Not Found" });
        const isMatch = await bcrypt.compare(verifyToken.password, findEmail.password);
        if(!isMatch) return res.json({ success: false, message: "Invalid Credentials" });

        return res.json({success: true, message: "User Authenticated", user: findEmail})
    }catch (error) {
        return res.json({ success: false, message: "Error Ocurred", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})
