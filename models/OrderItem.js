const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OrderItem = sequelize.define('OrderItem', {
    order_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // Ensure order_item_id is not null
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: {
                args: [1],
                msg: 'Quantity must be greater than 0' // Ensure quantity is greater than 0
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
    tableName: 'orderitems',
    freezeTableName: true, 
    timestamps: true, 
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

(async() => {
    await sequelize.sync();
  })();


module.exports = OrderItem;
