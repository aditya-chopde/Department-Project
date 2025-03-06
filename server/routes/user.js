const express = require("express");
const { handleUserSignup, handleUserLogin, getTextData, getImageData, getUsers } = require("../controllers/user");
const router = express();

router.post("/signup", handleUserSignup)
router.post("/login", handleUserLogin)
router.get("/get-users", getUsers);
router.get("/get-text-data/:id", getTextData);
router.get("/get-image-data/:id", getImageData);

module.exports = router;