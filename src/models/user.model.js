const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    tel: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  },
  {
    sequelize,
  }
);

module.exports = User;