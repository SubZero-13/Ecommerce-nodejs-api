const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Name is required'
            },
            len: {
                args: [2, 255],
                msg: 'Name must be between 2 and 255 characters long'
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
        validate: {
            len: {
                args: [0, 1000],
                msg: 'Description cannot exceed 1000 characters'
            }
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'categories', 
    freezeTableName: true, 
    timestamps: true, 
    charset: 'utf8mb4', 
    collate: 'utf8mb4_unicode_ci',
});

(async() => {
    await sequelize.sync();
  })();

module.exports = Category;
