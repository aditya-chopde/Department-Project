const express = require("express");
const { submitImage, submitText, addBlog } = require("../controllers/uploads");
const upload = require("../upload");
const router = express();

router.post("/images", upload.single("file_image"), submitImage);
router.post("/textdata", submitText);
router.post("/blog", addBlog);

module.exports = router;