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
  }
};
