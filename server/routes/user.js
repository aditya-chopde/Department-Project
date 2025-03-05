const express = require("express");
const { handleUserSignup, handleUserLogin, getTextData, getImageData } = require("../controllers/user");
const router = express();

router.post("/signup", handleUserSignup)
router.post("/login", handleUserLogin)
router.get("/get-text-data/:id", getTextData);
router.get("/get-image-data/:id", getImageData);

module.exports = router;