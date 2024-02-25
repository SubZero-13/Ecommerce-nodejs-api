const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Cart = require('./Cart.js');

const CartItem = sequelize.define('CartItem', {
    cart_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: {
                args: [1],
                msg: 'Quantity must be at least 1'
            }
        }
    },
    createdAt: {
        type: DataTypes.VIRTUAL,
    },
    updatedAt: {
        type: DataTypes.VIRTUAL,
    }
}, {
    tableName: 'cartitems', 
    freezeTableName: true, 
    timestamps: true, 
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
});

(async() => {
  await sequelize.sync();
})();

module.exports = CartItem;
