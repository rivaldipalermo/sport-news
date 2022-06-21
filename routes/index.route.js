const indexController = require("../controllers/index.controller");
const CategoryController = require("../controllers/CategoryController");
const UserController = require("../controllers/UserController");
const NewsController = require("../controllers/NewsController");
const auth = require("../middlewares/auth");

const router = require("express").Router();

// user
router.get("/", indexController.index);
router.get("/login", UserController.login);
router.get("/register", UserController.register);
router.post("/register/store", UserController.store);
router.post("/login/auth", UserController.auth);

// category
router.get("/category", CategoryController.index);
router.get("/category/create", CategoryController.create);
router.post("/category/store", CategoryController.store);
router.get("/category/:id", CategoryController.show);
router.put("/category/:id", CategoryController.update);
router.delete("/category/:id", CategoryController.delete);

// news
router.get("/news", NewsController.index);

module.exports = router;
