const rescue = require('express-rescue');
const { Patient, Plan, Surgery } = require('../models');

const listAllPatients = rescue(async (req, res, next) => {
  const patients = await Patient.findAll({
    include: { model: Plan, as: 'plan'},
    attributes: { exclude: ['plan_id'] } 
  })

  return res.status(200).json(patients);
});

const listPatientsById = rescue(async (req, res, next) => {
  const patients = await Patient.findAll({
    where: { plan_id: req.params.id },
    include: { model: Plan, as: 'plan'},
    attributes: { exclude: ['plan_id'] } 
  })

  return res.status(200).json(patients);
});

const listPatientsWithSurgeries = rescue(async (req, res, next) => {
  const list = await Patient.findAll({
    include: [{
      model: Surgery,
      as: 'surgeries',
      through: { attributes: [] }
    }],
  })

  res.status(200).json(list);
})

module.exports = {
  listAllPatients,
  listPatientsById,
  listPatientsWithSurgeries,
}