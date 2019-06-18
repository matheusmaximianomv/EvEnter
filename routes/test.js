/* Rota de Teste */
const express = require("express");
const router = express.Router();

/* Controller de Index */
const UserController = require("./../app/controllers/UserController");
router.get("/user/all", UserController.index);
router.get("/user/:email", UserController.show);
router.post("/user/create", UserController.create);
router.post("/user/update/:email", UserController.update);
router.post("/user/delete/:email", UserController.delete);

/* Controller de Categoria */
const CategorieController = require("./../app/controllers/CategorieController");
router.get("/categorie/all", CategorieController.index);
router.get("/categorie/show/:id", CategorieController.show);
router.post("/categorie/create", CategorieController.create);
router.post("/categorie/update/:id", CategorieController.update);
router.post("/categorie/delete/:id", CategorieController.delete);

/* Controller de Events */
const EventController = require("./../app/controllers/EventController");
router.get("/event/all", EventController.index);
router.get("/event/:id", EventController.showById);
router.get("/event/user/:email", EventController.showByUser);
router.post("/event/create", EventController.create);
router.post("/event/update/:id", EventController.update);
router.post("/event/delete/:id", EventController.delete);

/*Controller de Itens*/
const ItemController = require("./../app/controllers/ItemController");
router.get("/item/all", ItemController.index);
router.get("/item/show/:id", ItemController.show);
router.post("/item/user/:email", ItemController.showByUser);

module.exports = router;
