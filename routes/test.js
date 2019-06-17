/* Rota de Teste */
const express = require("express");
const router = express.Router();

/* Controller de Index */
const UserController = require("./../app/controllers/UserController");
router.post('/user/create', UserController.create);
router.post('/user/update/:id', UserController.update);

module.exports = router;
