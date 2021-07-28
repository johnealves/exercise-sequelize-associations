const { Plans } = require('../models');
const rescue = require('express-rescue')

module.exports = rescue(async (req, res, next) => {
  const plans = await Plans.findAll();

  res.status(200).json(plans);
})