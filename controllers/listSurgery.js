const rescue = require('express-rescue');
const { Surgery } = require("../models");

module.exports = rescue(async (req, res, next) => {
  const surgery = await Surgery.findAll();

  res.status(200).json(surgery);
})