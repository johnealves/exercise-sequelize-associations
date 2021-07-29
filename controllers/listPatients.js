const rescue = require('express-rescue');
const { Patient, Plan } = require('../models');

module.exports = rescue(async (req, res, next) => {
  const patients = await Patient.findAll({
    include: { model: Plan, as: 'plan'},
    attributes: { exclude: ['plan_id'] } 
  })

  res.status(200).json(patients);
});
