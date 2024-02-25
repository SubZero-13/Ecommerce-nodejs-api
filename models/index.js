const Cart = require("./Cart.js");
const CartItem = require("./CartItem.js");
const Product = require("./Product.js");
const Category = require("./Category.js");
const Order = require("./Order.js");
const OrderItem = require("./OrderItem.js");
const User = require("./User.js");

Cart.hasMany(CartItem, {
  foreignKey: "cart_id",
});

CartItem.belongsTo(Cart, {
  foreignKey: "cart_id",
});
CartItem.belongsTo(Product, {
  foreignKey: "product_id",
});

Product.hasMany(CartItem, {
  foreignKey: "product_id",
});

Category.hasMany(Product, {
  foreignKey: "cat_id",
});

Order.belongsTo(User, {
  foreignKey: "user_id",
});
Order.hasMany(OrderItem, {
  foreignKey: "order_id",
});

OrderItem.belongsTo(Order, {
  foreignKey: "order_id",
});
OrderItem.belongsTo(Product, {
  foreignKey: "product_id",
});

Product.belongsTo(Category, {
  foreignKey: "cat_id",
});

User.hasMany(Cart, {
  foreignKey: "user_id",
});
User.hasMany(Order, {
  foreignKey: "user_id",
});

module.exports = {
  Cart,
  CartItem,
  Product,
  OrderItem,
  User,
  Order,
  Category,
};
