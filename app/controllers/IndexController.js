module.exports = {
  index(req, res) {
    return res.render(path.resolve("./app/views/index"));
  },

  login(req, res) {
    return res.render(path.resolve("./app/views/login"));
  },

  cadastro(req, res) {
    return res.render(path.resolve("./app/views/cadastro"));
  },

  categorias(req, res) {
    //Pesquisa no banco pelo slug de categoria
    const eventosCategoria = [];
    return res.render(path.resolve("./app/views/categorias"), { eventosCategoria });
  },

  categoriasEvento(req, res) {
    //Pesquisa no banco de evento por slug do evento
    const evento = [];
    return res.render(path.resolve(".app/views/categorias/evento"), { evento });
  }
};
