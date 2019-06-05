/* Rota Principal */
const express = require("express");
const router = express.Router();

/* Controller de Index */
const IndexController = require("./../app/controllers/IndexController");

router.get("/", IndexController.index);

router.get("/login", IndexController.login);

router.get("/cadastro", IndexController.cadastro);

router.get("/categorias/:slugCategoria", IndexController.categorias);

router.get("/categorias/evento/:slugEvento", IndexController.categoriasEvento);

/*
try {
    res.render(path.resolve("./app/views/login"))
}cath
*/

module.exports = router;
