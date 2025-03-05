const express = require("express");
const { handleUserSignup, handleUserLogin, getTextData } = require("../controllers/user");
const router = express();

router.post("/signup", handleUserSignup)
router.post("/login", handleUserLogin)
router.get("/get-text-data/:id", getTextData);

module.exports = router;