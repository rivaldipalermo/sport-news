const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
	index: async (req, res) => {
		const posts = await User.findAll();
		return res.render("post/index", {
			posts,
		});
	},
	login: async (req, res) => {
		return res.render("user/login");
	},
	register: async (req, res) => {
		return res.render("user/register");
	},
	store: async (req, res) => {
		const { name, email, password } = req.body;
		const passwordHash = await bcrypt.hash(password, 10);

		await User.create({
			name,
			email,
			password: passwordHash,
		});
		return res.redirect("/login");
	},
	auth: async (req, res) => {
		const user = await User.findOne({
			where: {
				email: req.body.email,
			},
		});
		if (!user) {
			return res.redirect("/login");
		}

		const checkPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (checkPassword) {
			req.session.user = user;
			return res.redirect("/news");
		} else {
			return res.redirect("/login");
		}
	},
	logout: async (req, res) => {
		// todo
	},
};
