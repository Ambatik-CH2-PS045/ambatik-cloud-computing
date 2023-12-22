'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.hasMany(models.cart, { foreignKey: 'productId' });
      product.belongsToMany(models.order, { through: models.detail_order });
    }
  }
  product.init({
    name: DataTypes.STRING,
    url_product: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.DOUBLE,
    product_sold: DataTypes.INTEGER,
    store_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};