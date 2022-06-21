const News = require("../models/News");

module.exports = {
  index: async (req, res) => {
    const news = await News.findAll();
    return res.render("news/index", {
      news,
    });
  },
  create: async (req, res) => {
    return res.render("news/create");
  },
  store: async (req, res) => {
    await News.create(req.body);
    return res.redirect("/news");
  },
  show: async (req, res) => {
    // galih's todo
    const news = await News.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!news) {
      return res.redirect("/news");
    }

    return res.render("news/edit", {
      news,
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

    await News.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.redirect("/news");
  },
  delete: async (req, res) => {
    News.destroy({ where: { id: req.params.id } });
    return res.redirect("/news");
  },
};
