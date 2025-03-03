const express = require("express")
const { rejectLoginHandler, approveLoginHandler, rejectPostHandler, approvePostHandler } = require("../controllers/admin")
const router = express()

router.post("/reject-login/:id", rejectLoginHandler);
router.post("/approve-login/:id", approveLoginHandler);
router.post("/reject-post/:id", rejectPostHandler);
router.post("/approve-post/:id", approvePostHandler);

module.exports = router;