'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detail_order.belongsTo(models.order, { foreignKey: 'orderId' });
      detail_order.belongsTo(models.product, { foreignKey: 'productId' });
    }
  }
  detail_order.init({
    each_qty: DataTypes.INTEGER,
    each_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_order',
  });
  return detail_order;
};