'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      like.belongsTo(models.user, { foreignKey: 'userId' });
      like.belongsTo(models.article, { foreignKey: 'articleId' });
    }
  }
  like.init({
    status_like: DataTypes.ENUM('0', '1')
  }, {
    sequelize,
    modelName: 'like',
  });

  
  return like;
};