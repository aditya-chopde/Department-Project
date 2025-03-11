const bodyParser = require("body-parser");
const express = require("express")
const cors = require("cors")
const { connectDb } = require("./connectdb");
const user = require("./routes/user");
const uploads = require("./routes/uploads")
const admin = require("./routes/admin");
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

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})
