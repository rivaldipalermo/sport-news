const News = require("../models/News");
const Category = require("../models/Category");
module.exports = {
	index: async (req, res) => {
		const news = await News.findAll({
			include: [
				{
					model: Category,
					attributes: ["category_name"],
					required: true,
				},
			],
		});
		return res.render("news/index", {
			news,
		});
	},
	create: async (req, res) => {
		const categories = await Category.findAll();
		return res.render("news/create", { categories });
	},
	store: async (req, res) => {
		const now = new Date(Date.now());

		await News.create({
			news_title: req.body.title,
			news_content: req.body.content,
			category_id: req.body.category,
			post_date:
				now.getDate() +
				"/" +
				now.getMonth() +
				"/" +
				now.getFullYear(),
			user_id: req.session.user.id,
		});
		return res.redirect("/news");
	},
	show: async (req, res) => {
		// galih's todo
		const news = await News.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: Category,
					attributes: ["category_name", "id"],
					required: true,
				},
			],
		});
		const categories = await Category.findAll();

		if (!news) {
			return res.redirect("/news");
		}
		return res.render("news/edit", {
			news,
			categories,
		});
	},
	update: async (req, res) => {
		const news = await News.findOne({
			where: {
				id: req.params.id,
			},
		});

		if (!news) {
			return res.redirect("/news");
		}
		const now = new Date(Date.now());

		await News.update(
			{
				news_title: req.body.title,
				news_content: req.body.content,
				category_id: req.body.category,
				post_date:
					now.getDate() +
					"/" +
					now.getMonth() +
					"/" +
					now.getFullYear(),
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);

		return res.redirect("/news");
	},
	delete: async (req, res) => {
		News.destroy({ where: { id: req.params.id } });
		return res.redirect("/news");
	},
};
