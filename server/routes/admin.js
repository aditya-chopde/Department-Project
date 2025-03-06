const express = require("express")
const { rejectLoginHandler, approveLoginHandler, rejectPostHandler, approvePostHandler, rejectTextDataHandler, acceptTextDataHandler } = require("../controllers/admin");
const { getTextDataForAdmin, getImageDataForAdmin } = require("../controllers/uploads");
const router = express()

router.post("/reject-login/:id", rejectLoginHandler);
router.post("/approve-login/:id", approveLoginHandler);
router.post("/reject-post/:id", rejectPostHandler);
router.post("/approve-post/:id", approvePostHandler);
router.post("/reject-post-text/:id", rejectTextDataHandler);
router.post("/approve-post-text/:id", acceptTextDataHandler);
router.get("/get-text-data", getTextDataForAdmin);
router.get("/get-image-data", getImageDataForAdmin);

module.exports = router;