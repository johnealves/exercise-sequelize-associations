const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const controllers = require('../controllers')

router.get('/', controllers.listAllPatients);
router.get('/surgeries', controllers.listPatientsWithSurgeries);
router.get('/:id', controllers.listPatientsById)

module.exports = router;