const express = require("express");
const { handleUserSignup, handleUserLogin, getTextData, getImageData, getUsers, getBlogsData } = require("../controllers/user");
const router = express();

router.post("/signup", handleUserSignup)
router.post("/login", handleUserLogin)
router.get("/get-users", getUsers);
router.get("/get-text-data/:id", getTextData);
router.get("/get-image-data/:id", getImageData);
router.get("/get-blog-data/:id", getBlogsData);

module.exports = router;