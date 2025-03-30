const express = require("express");
const { submitImage, submitText, addBlog, editTextData, editImageData, editBlogData } = require("../controllers/uploads");
const upload = require("../upload");
const router = express();

router.post("/images", upload.single("file_image"), submitImage);
router.post("/textdata", submitText);
router.post("/blog", addBlog);
router.post("/textdata/edit/:id", editTextData);
router.post("/imagedata/edit/:id", editImageData);
router.post("/blogdata/edit/:id", editBlogData);

module.exports = router;