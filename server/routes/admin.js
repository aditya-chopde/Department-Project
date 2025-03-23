const express = require("express")
const { rejectLoginHandler, approveLoginHandler, rejectPostHandler, approvePostHandler, rejectTextDataHandler, acceptTextDataHandler, approveBlogHandler, rejectBlogHandler, getAllBlogs } = require("../controllers/admin");
const { getTextDataForAdmin, getImageDataForAdmin, handleAdminLogin } = require("../controllers/uploads");
const router = express()

router.post("/reject-login/:id", rejectLoginHandler);
router.post("/approve-login/:id", approveLoginHandler);
router.post("/reject-post/:id", rejectPostHandler);
router.post("/approve-post/:id", approvePostHandler);
router.post("/reject-post-text/:id", rejectTextDataHandler);
router.post("/approve-post-text/:id", acceptTextDataHandler);
router.get("/get-text-data", getTextDataForAdmin);
router.get("/get-image-data", getImageDataForAdmin);
router.post("/admin-login", handleAdminLogin)
router.post("/approve-blog/:id", approveBlogHandler)
router.post("/reject-blog/:id", rejectBlogHandler)
router.get("/get-blogs", getAllBlogs);

module.exports = router;