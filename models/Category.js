const { DataTypes } = require("sequelize");
const db = require("../database");

const Category = db.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category_name: DataTypes.STRING(80),
});

module.exports = Category;
