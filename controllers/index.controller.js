const News = require("../models/News");
const User = require("../models/User");
const Category = require("../models/Category");

module.exports = {
	index: async (req, res) => {
		const news = await News.findAll({
			include: [
				{
					model: Category,
				},
				{
					model: User,
				},
			],
		});

		return res.render("index", { news });
	},
};
