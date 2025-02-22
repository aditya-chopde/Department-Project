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
    return res.json({ success: true, message: "API Working" })
})

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})
