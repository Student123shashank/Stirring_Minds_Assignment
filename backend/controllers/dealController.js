const Deal = require("../models/Deal");

exports.getAllDeals = async (req, res) => {
  const deals = await Deal.find();
  res.json(deals);
};

exports.getDealById = async (req, res) => {
  const deal = await Deal.findById(req.params.id);

  if (!deal) {
    res.status(404);
    throw new Error("Deal not found");
  }

  res.json(deal);
};
