const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  claimDeal,
  getMyClaims
} = require("../controllers/claimController");

router.post("/:dealId", protect, claimDeal);
router.get("/my", protect, getMyClaims);

module.exports = router;
