/* Rota Principal */
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Primeira Página do Projeto");
});

module.exports = router;