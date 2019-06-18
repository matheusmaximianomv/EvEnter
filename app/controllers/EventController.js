const { Event, Item, Tag, Events_Tag, User } = require('./../models');

module.exports = {

    async index(req, res) {
        try {
            const events = await Event.findAll();
            return res.send({events});
        } catch (err) {
            return res.send({ error : "Erro ", description : 'Não foi possivel listar todos os eventos'});
        }
    },

    async showById(req, res) {
        try {
            const event = await Event.findOne({where : {id : req.params.id}});
            const items = await Item.findAll({where : {id_event : event.id}});
            const ids_tag = await Events_Tag.findAll({where : {id_event : event.id}});
            const tags = [];
            for(value of ids_tag) {
                const tag = await Tag.findOne({where : {id : value.id_tag}});
                tags.push(tag);
            }
            return res.send({event, items, tags});
        } catch (err) {
            return res.send({ error : "Erro ", description : 'Não foi possivel listar o evento'});
        }
    },

    async showByUser(req, res) {
        try {
            const user = await User.findOne({where : {
                email : req.params.email
            }});
            try {
                const event = await Event.findAll({where : {id_user : user.id}});
                return res.send({event});
            } catch (err) {
                return res.send({ error : "Erro ", description : 'Não foi possivel listar o evento do usuário'});
            }
        } catch (err) {
            return res.send({ error : "Erro ", description : 'Não foi possivel listar o usuário'});
        }
    },

    async create(req, res) {

        const { name, description, private, accessCode, date, street, postalCode, neighborhood, city, complement, id_uf, id_user, id_category, items, tags } = req.body;

        if (private && !accessCode)
            return res.json({ error: "Campos Inválidos", description: "Você não passou a senha de acesso" });

        if (!name || !description || !date || !street || !postalCode || !neighborhood || !city || !complement || !id_uf || !id_user || !id_category || !items || !tags)
            return res.json({ error: "Campos Inválidos", description: "Preencha todos os campos corretamente" });

        try {
            // Criação do Evento
            const event = await Event.create({ name, description, private, accessCode, date, street, postalCode, neighborhood, city, complement, id_uf, id_user, id_category });
            try {
                // Criação dos Itens
                items.map(async (item) => {
                    const { name, description, verified, id_user } = item;
                    await Item.create({ name, description, verified, id_user, id_event: event.id });
                });
            } catch (error) {
                return res.json({ error: "Erro no Servidor", description: "Erro a salvar os itens." });
            }
            // Criação das Tags e a Normalização
            try {
                tags.map(async (element) => {
                    const tag = await Tag.create({ name: element });
                    await Events_Tag.create({ id_event: event.id, id_tag: tag.id });
                });
            } catch (error) {
                return res.json({ error: "Erro no Servidor", description: "Erro ao cadastrar tags." });
            }
            return res.json({ event })
        } catch (error) {
            return res.json({ error: "Erro no Servidor", description: "Erro ao criar um evento." });
        }
    },

    async update(req, res) {
        const { name, description, private, accessCode, date, street, postalCode, neighborhood, city, complement, id_uf, id_user, id_category } = req.body;

        if (private && !accessCode)
            return res.json({ error: "Campos Inválidos", description: "Você não passou a senha de acesso" });

        if (!name || !description || !date || !street || !postalCode || !neighborhood || !city || !complement || !id_uf || !id_user || !id_category)
            return res.json({ error: "Campos Inválidos", description: "Preencha todos os campos corretamente" });

        try {
            const status = await Event.update({ name, description, private, accessCode, date, street, postalCode, neighborhood, city, complement, id_uf, id_user, id_category, updateAt: Date.now() }, { where: { id: req.params.id } });
            return res.send({ status });
        } catch (err) {
            return res.send({ error: 'Erro ao Atualizar', description: 'Erro no Servidor', err });
        }

    },

    async delete(req, res) {
        try {
            const status = await Event.destroy({where : {id : req.params.id}});
            return res.send({status});
        } catch (err) {
            return res.send({ error: 'Erro ao Deletar', description: 'Erro no Servidor', err });
        }
    }
}