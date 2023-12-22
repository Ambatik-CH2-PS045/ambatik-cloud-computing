'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      quiz.hasMany(models.quiz_history, { foreignKey: 'quizId' });
      quiz.belongsToMany(models.user, { through: models.quiz_history });
      quiz.hasMany(models.question, {foreignKey: 'quizId'});

    }
  }
  quiz.init({
    type: DataTypes.ENUM('origin', 'pattern', 'meaning')
  }, {
    sequelize,
    modelName: 'quiz',
  });
  return quiz;
};