const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for category.
class Address extends Model {}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
          },
      },
    address_line1: {
      type: DataTypes.STRING
    },
    address_line2: {
      type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
      },
      postal_code: {
        type: DataTypes.INTEGER
      },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    freezeTableName : true,
    modelName: 'address'
  }
);

module.exports = Address;
