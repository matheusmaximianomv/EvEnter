const { Categorie } = require("../models/Categorie");

module.exports = {
  //Cadastrar categoria
  async create(req, res) {
    const { name } = req.body;

    if (!name)
      return res.send({
        error: "Erro ao Cadastrar",
        description: "Falha no cadastro."
      });

    const newCategorie = { name };

    try {
      const categorie = await Categorie.create(newCategorie);
      return res.json(categorie);
    } catch (err) {
      return res.json({
        error: "Erro ao Cadastrar",
        description: "Erro no Servidor.",
        err
      });
    }
  }
};
