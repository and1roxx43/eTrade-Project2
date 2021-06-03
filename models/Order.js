const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for category.
class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
        type: DataTypes.STRING
      },
    date_placed: {
      type: DataTypes.STRING
    },
    total_price: {
      type: DataTypes.STRING
    },
    total_quantity: {
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
    modelName: 'order'
  }
);

module.exports = Order;
