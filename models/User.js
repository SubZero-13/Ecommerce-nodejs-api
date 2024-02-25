const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email format",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    createdAt: {
      type: DataTypes.VIRTUAL,
    },
    updatedAt: {
      type: DataTypes.VIRTUAL,
    },
  },
  {
    tableName: "users",
    freezeTableName: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = User;
