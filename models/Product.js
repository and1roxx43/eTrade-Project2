const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for category.
class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
      },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    category_id: {
        type: DataTypes.STRING
      },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName : true,
    underscored: true,
    freezeTableName : true,
    modelName: 'product'
  }
);

module.exports = Product;
