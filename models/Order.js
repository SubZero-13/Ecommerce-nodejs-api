const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // Ensuring the order_id is not null
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: 'Total amount must be greater than or equal to 0' // Ensuring total_amount is not negative
            }
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false // Ensuring created_at is not null
    },
    createdAt: {
        type: DataTypes.VIRTUAL,
    },
    updatedAt: {
        type: DataTypes.VIRTUAL,
    }
}, {
    tableName: 'orders', 
    freezeTableName: true,
    timestamps: true, 
    charset: 'utf8mb4', 
    collate: 'utf8mb4_unicode_ci'
});

(async() => {
    await sequelize.sync();
  })();

module.exports = Order;
