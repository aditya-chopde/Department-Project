const express = require("express");
const { submitImage } = require("../controllers/image");
const upload = require("../upload");
const router = express();

router.post("/images", upload.single("file_image"), submitImage)

module.exports = router;