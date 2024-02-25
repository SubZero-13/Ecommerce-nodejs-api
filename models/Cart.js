const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const CartItem = require("./CartItem.js");

const Cart = sequelize.define("Cart", {
  cart_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false, 
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  tableName: 'carts', 
  freezeTableName: true, 
  timestamps: false, 
  charset: 'utf8mb4', 
  collate: 'utf8mb4_unicode_ci'
});


(async() => {
  await sequelize.sync();
})();

module.exports = Cart;
