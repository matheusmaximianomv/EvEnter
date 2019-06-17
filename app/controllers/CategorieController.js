const { Categorie } = require("../models");

module.exports = {
  //Listar todas categorias
  async index(req, res) {
    try {
      const categorie = await Categorie.findAll();
      return res.send({ categorie });
    } catch (error) {
      return res.send({
        error: "Erro",
        description: "Não foi possível listar as categorias"
      });
    }
  },

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
  },

  async update(req, res) {
    //Atualização de Categoria
    const { name } = req.body;

    if (!name)
      return res.send({
        error: "Erro ao Atualizar",
        description: "Falha na atualização"
      });

    updateCategorie = { name, updateAt: Date.now };

    try {
      const categorie = await Categorie.update(
        {
          name,
          updatedAt: Date.now
        },
        { where: { id: req.params.id } }
      );
      return res.send({ categorie });
    } catch (err) {
      return res.send({
        error: "Erro ao Atualizar",
        description: "Erro no Servidor",
        err
      });
    }
  },

  async delete(req, res) {
    //Deletar categoria
    try {
      const categorie = await Categorie.destroy({
        where: { id: req.params.id }
      });
      return res.send({ categorie });
    } catch (err) {
      console.log(err);
      return res.send({
        error: "Erro ao Deletar",
        description: "Erro no Servidor",
        err
      });
    }
  }
};
