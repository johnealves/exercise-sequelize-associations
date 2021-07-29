require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./api');

const error = require('./middlewares/error');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use('/plans', routes.plansRoute);
app.use('/patients', routes.patientsRoute)

app.use(error);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});