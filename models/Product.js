const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, 
        validate: {
            min: {
                args: [0],
                msg: 'Price must be greater than or equal to 0'
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.VIRTUAL,
    },
    updatedAt: {
        type: DataTypes.VIRTUAL,
    }
}, {
    tableName: 'products', 
    freezeTableName: true, 
    timestamps: true, 
    charset: 'utf8mb4', 
    collate: 'utf8mb4_unicode_ci',
});


(async() => {
    await sequelize.sync();
  })();

module.exports = Product;
