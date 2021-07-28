const express = require('express');

const bodyParser = require('body-parser');
const router = express.Router();
const controllers = require('../controllers/index');

router.use(bodyParser.json());

router.get('/', controllers.listPlans);

module.exports = router;