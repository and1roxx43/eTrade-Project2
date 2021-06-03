const Category_Discount = require('./Category_Discount');
const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const Order_Item = require('./Order_Item');
const Address = require('./Address');
const Product_Cart = require('./Product_Cart');
const Cart = require('./Cart');


User.hasMany(Address, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Address.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Address, User };

