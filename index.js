require('dotenv').config();

const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});