'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // article.belongsToMany(models.user, { through: models.like, foreignKey: 'articleId' });
      article.hasMany(models.like, { foreignKey: 'articleId' });
    }
  }
  article.init({
    title: DataTypes.STRING,
    url_banner: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    total_like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};