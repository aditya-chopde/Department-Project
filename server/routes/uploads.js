const express = require("express");
const { submitImage, submitText, addBlog, editTextData, editImageData, editBlogData, getSingleText, getSingleImage } = require("../controllers/uploads");
const upload = require("../upload");
const router = express();

// Upload Routes
router.post("/images", upload.single("file_image"), submitImage);
router.post("/textdata", submitText);
router.post("/blog", addBlog);

// Get Single Routes
router.get("/get-single-text/:id", getSingleText);
router.get("/get-single-image/:id", getSingleImage);

// Edit Routes
router.post("/textdata/edit/:id", editTextData);
router.post("/imagedata/edit/:id", editImageData);
router.post("/blogdata/edit/:id", editBlogData);

module.exports = router;