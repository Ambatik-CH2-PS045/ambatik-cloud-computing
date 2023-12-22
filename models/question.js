'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association 
      question.hasMany(models.answer, {foreignKey: 'questionId' });
      question.belongsTo(models.quiz, {foreignKey: 'quizId' });

    }
  }
  question.init({
    question: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};