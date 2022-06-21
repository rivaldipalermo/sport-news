const Category = require("../models/Category");

module.exports = {
  index: async (req, res) => {
    const category = await Category.findAll();
    return res.render("category/index", {
      category,
    });
  },
  create: async (req, res) => {
    return res.render("category/create");
  },
  store: async (req, res) => {
    await Category.create(req.body);
    return res.redirect("/category");
  },
  show: async (req, res) => {
    // galih's todo
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!category) {
      return res.redirect("/category");
    }

    return res.render("category/edit", {
      category,
    });
  },
  update: async (req, res) => {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!category) {
      return res.redirect("/category");
    }

    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.redirect("/category");
  },
  delete: async (req, res) => {
    Category.destroy({ where: { id: req.params.id } });
    return res.redirect("/category");
  },
};
