'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quiz_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      quiz_history.belongsTo(models.user, { foreignKey: 'userId' });
      quiz_history.belongsTo(models.quiz, { foreignKey: 'quizId' });

    }
  }
  quiz_history.init({
    done: DataTypes.ENUM('0', '1')
  }, {
    sequelize,
    modelName: 'quiz_history',
  });
  return quiz_history;
};