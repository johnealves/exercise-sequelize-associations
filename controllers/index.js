const listPlans = require('./listPlans');
const listSurgery = require('./listSurgery');
const { listAllPatients,
  listPatientsById,
  listPatientsWithSurgeries
} = require('./listPatients');

module.exports = {
  listPlans,
  listSurgery,
  listAllPatients,
  listPatientsById,
  listPatientsWithSurgeries
};
