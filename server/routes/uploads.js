const express = require("express");
const { submitImage, submitText } = require("../controllers/uploads");
const upload = require("../upload");
const router = express();

router.post("/images", upload.single("file_image"), submitImage)
router.post("/textdata", submitText);

module.exports = router;