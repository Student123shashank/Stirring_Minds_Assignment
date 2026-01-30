const Claim = require("../models/Claim");
const Deal = require("../models/Deal");
const User = require("../models/User");

exports.claimDeal = async (req, res) => {
  const deal = await Deal.findById(req.params.dealId);
  const user = await User.findById(req.user.id);

  if (!deal) {
    return res.status(404).json({ message: "Deal not found" });
  }

  if (deal.isLocked && !user.isVerified) {
    return res.status(403).json({ message: "Deal requires verification" });
  }

  const alreadyClaimed = await Claim.findOne({
    user: user._id,
    deal: deal._id
  });

  if (alreadyClaimed) {
    return res.status(400).json({ message: "Deal already claimed" });
  }

  const claim = await Claim.create({
    user: user._id,
    deal: deal._id
  });

  res.status(201).json(claim);
};

exports.getMyClaims = async (req, res) => {
  const claims = await Claim.find({ user: req.user.id }).populate("deal");
  res.json(claims);
};
