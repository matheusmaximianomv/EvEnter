const { Event, Item, Tag, Events_Tag } = require('./../models');

module.exports = {
    async create(req, res) {
        
        const { name, description, private, accessCode, date, street, postalCode, neighborhood, city, complement, id_uf, id_user, id_category, items, tags } = req.body;

        if(private)
            if(!accessCode)
                return res.json({error: "Campos Inválidos", description : "Você não passou a senha de acesso"});
        
        if(!name || !description || !date || !street || !postalCode || !neighborhood || !city || !complement || !id_uf || !id_user || !id_category || !items || !tags)
            return res.json({error: "Campos Inválidos", description : "Preencha todos os campos corretamente"});

        try {
            // Criação do Evento
            const event = await Event.create({name, description, private, accessCode, date, street, postalCode, neighborhood, city, complement, id_uf, id_user, id_category});
            try {
                // Criação dos Itens
                items.map(async (item) => {
                    const {name, description, verified, id_user} = item;
                    await Item.create({name, description, verified, id_user, id_event : event.id});
                });
            } catch (error) {
                return res.json({error: "Erro no Servidor", description : "Erro a salvar os itens."});
            }
            // Criação das Tags e a Normalização
            try {
                tags.map(async (element) => {
                    const tag = await Tag.create({name : element});
                    await Events_Tag.create({id_event : event.id, id_tag : tag.id});
                });
            } catch (error) {
                return res.json({error: "Erro no Servidor", description : "Erro ao cadastrar tags."});    
            }
            return res.json({event})
        } catch (error) {
            return res.json({error: "Erro no Servidor", description : "Erro ao criar um evento."});
        }
    },

    async update(req, res) {
    }
}