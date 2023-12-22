'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class batik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  batik.init({
    name: DataTypes.STRING,
    url_batik: DataTypes.TEXT,
    origin: DataTypes.STRING,
    meaning: DataTypes.TEXT,
    making_process: DataTypes.TEXT,
    usage_purpose: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'batik',
  });
  return batik;
};