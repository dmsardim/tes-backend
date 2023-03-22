'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'name is required' },
          notEmpty: { msg: 'name is required' },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'age is required' },
          notEmpty: { msg: 'age is required' },
        },
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: 'dateOfBird is required' },
          notEmpty: { msg: 'dateOfBird is required' },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'phoneNumber is required' },
          notEmpty: { msg: 'phoneNumber is required' },
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'city is required' },
          notEmpty: { msg: 'city is required' },
        },
      },
      education: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'education is required' },
          notEmpty: { msg: 'education is required' },
        },
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          notNull: { msg: 'image is required' },
          notEmpty: { msg: 'image is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
