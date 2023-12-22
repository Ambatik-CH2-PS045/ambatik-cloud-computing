'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user, { foreignKey: 'userId' });
      // order.hasMany(models.detail_order, { foreignKey: 'orderId' });
      order.belongsToMany(models.product, { through: models.detail_order});

    }
  }
  order.init({
    total_item: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};