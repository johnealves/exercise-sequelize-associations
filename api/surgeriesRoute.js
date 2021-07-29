const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('../controllers');

const router = express.Router();

router.use(bodyParser.json());

router.get('/', controllers.listSurgery);

module.exports = router