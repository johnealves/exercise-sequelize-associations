'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const plan = sequelize.define('plan', {
    plan_id: DataTypes.INTEGER,
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  });

  return plan;
};
