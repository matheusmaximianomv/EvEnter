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
router.post("/categorie/create", CategorieController.create);

module.exports = router;
