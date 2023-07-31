const DataTypes = require('sequelize');
const sequelize = require('../configs/db');

const Product = sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    pd_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    pd_price: {
      type: DataTypes.INTEGER,
    },

    pd_detail: {
      type: DataTypes.STRING
    }

  }, {
  sequelize
});
module.exports = Product;