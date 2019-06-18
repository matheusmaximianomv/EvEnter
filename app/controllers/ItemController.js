const { Item } = require("../models");

module.exports = {
  //Listar todos os itens
  async index(req, res) {
    try {
      const item = await Item.findAll();
      return res.send({ item });
    } catch (error) {
      return res.send({
        error: "Erro",
        description: "Não foi possível listar os itens"
      });
    }
  },

  //Listar um item
  async show(req, res) {
    try {
      const item = await Item.findOne({ where: { id: req.params.id } });
      return res.send({ item });
    } catch {
      return res.send({
        error: "Erro",
        description: "Não foi possível listar o item"
      });
    }
  }
};
