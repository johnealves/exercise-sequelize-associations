'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define('Plans', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
  });

  return Plans;
};
