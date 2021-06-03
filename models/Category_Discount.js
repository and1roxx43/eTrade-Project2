const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for discounts offered on category.
class Category_Discount extends Model {}

Category_Discount.init(

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
    duration_weeks: {
      type: DataTypes.INTEGER
    },
    discount_percent: {
      type: DataTypes.DECIMAL
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    freezeTableName : true,
    modelName: 'category_discount'
  }
);

module.exports = Category_Discount;
