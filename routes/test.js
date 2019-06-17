/* Rota de Teste */
const express = require("express");
const router = express.Router();

/* Controller de Index */
const UserController = require("./../app/controllers/UserController");
router.post("/user/create", UserController.create);
router.post("/user/update/:email", UserController.update);
router.post("/user/delete/:email", UserController.delete);

/* Controller de Categoria */
const CategorieController = require("./../app/controllers/CategorieController");
router.post("/categorie/create", CategorieController.create);
router.post("/categorie/update/:id", CategorieController.update);
router.post("/categorie/delete/:id", CategorieController.delete);

module.exports = router;
