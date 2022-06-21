const { DataTypes } = require("sequelize");
const db = require("../database");
const Category = require("./Category");
const User = require("./User");

const News = db.define("News", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  news_title: DataTypes.STRING(255),
  post_date: DataTypes.STRING(255),
  news_content: DataTypes.TEXT,
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

module.exports = News;
