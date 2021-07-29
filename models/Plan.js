'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
  });

  Plan.associete = (models) => {
    Plan.hasMany(models.Patient, {
      foreignKey: 'plan_id',
      as: 'patient',
    })
  }

  return Plan;
};
