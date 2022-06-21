module.exports = {
  index: async (req, res) => {
    const name = "Tes";
    const title = "Halo";
    const myList = ["tes", "bebas"];

    return res.render("index", { name, title, myList });
  },
};
