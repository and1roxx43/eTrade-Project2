const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for category.
class Order_Item extends Model {}

Order_Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
        type: DataTypes.INTEGER
      },
    product_id: {
      type: DataTypes.INTEGER
    },
    product_quantity: {
      type: DataTypes.INTEGER
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    freezeTableName : true,
    modelName: 'order_item'
  }
);

module.exports = Order_Item;
