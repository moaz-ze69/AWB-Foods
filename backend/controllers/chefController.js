const Chef = require("../models/chefModel");
const catchAsyncError = require("../middlewares/catchAsyncErrors");

const getChefs = catchAsyncError(async (req, res, next) => {
  const chefs = await Chef.find();
  res.status(200).send({ data: chefs });
});

module.exports = { getChefs };
