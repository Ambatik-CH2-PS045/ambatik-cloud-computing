'use strict';
const {
  Model
} = require('sequelize');
const models = require('../models/');
const article = models.article;
const like = models.like;
const user = models.user;

const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user.belongsToMany(models.article, { through: models.like, foreignKey: 'userId' });
      user.hasMany(models.like, { foreignKey: 'userId' });
      user.hasMany(models.cart, { foreignKey: 'userId' });
      user.hasMany(models.order, { foreignKey: 'userId'});
      user.hasMany(models.quiz_history, { foreignKey: 'userId'});
      user.belongsToMany(models.quiz, { through: models.quiz_history });

    }
    
    static async isUsernameRegistered(username) {
      const user = await this.findOne({ where: { username: username } });
      return !!user; // Returns true if a user with the given username exists, false otherwise
    }

    static async isEmailRegistered(email) {
      const user = await this.findOne({ where: { email: email } });
      return !!user; // Returns true if a user with the given email exists, false otherwise
    }

    static async userLogin(username, password){
      const userPassword = await this.findOne({
        attributes: ['password'], // Specify password field
        where: { username: username }, // Filter by password
      });

      const isPasswordValid = await bcrypt.compare(password, userPassword.password);

      if (isPasswordValid) {
        // Password is valid, proceed with login or other operations
        // console.log('Password is valid');
        return true
      } else {
        // Password is incorrect, handle the error
        // console.error('Password is incorrect');
        return false
      }
    }
  }
  user.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    url_profile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });

  return user;
};