const express = require("express")
const { rejectLoginHandler, approveLoginHandler, rejectPostHandler, approvePostHandler } = require("../controllers/admin")
const router = express()

router.post("/reject-login", rejectLoginHandler);
router.post("/approve-login", approveLoginHandler);
router.post("/reject-post", rejectPostHandler);
router.post("/approve-post", approvePostHandler);

module.exports = router;