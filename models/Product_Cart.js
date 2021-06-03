const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for category.
class Product_Cart extends Model {}

Product_Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
        type: DataTypes.STRING
      },
      cart_id: {
      type: DataTypes.STRING
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName : true,
    underscored: true,
    modelName: 'product_cart'
  }
);

module.exports = Product_Cart;
