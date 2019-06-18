const { User, Users_Event, Event, Item } = require('./../models');

module.exports = {
    async registerUserInEvent(req, res) {
        const { email, accessCode, id_event } = req.body;
        try {
            const user = await User.findOne({where : { email }});
            try {
                const event = await Event.findOne({where : { id : id_event }});
                
                if(event.private && accessCode !== event.accessCode)
                    return res.send({error: "Permissão Negada", description : "Código de Acesso Errado"});

                const status = await Users_Event.create({id_user : user.id, id_event : event.id});

                res.send({status});

            } catch (err) {
                console.log(err);
                return res.send({error: "Erro no Servidor", description : "Não foi possível recuperar as informações do evento"});
            }
        } catch (err) {
            return res.send({error: "Erro no Servidor", description : "Não foi possível recuperar as informações do usuário"});
        }
    },

    async removeUserInEvent(req, res) {
        const { email, id_event } = req.body;
        try {
            const user = await User.findOne({where : { email }});
            const status = await Users_Event.destroy({ where : { id_user : user.id, id_event}});
            return res.send({status});
        } catch (error) {
            return res.send({error: "Erro no Servidor", description : "Não foi possível recuperar as informações do usuário"});
        }
    },

    async assingItem(req, res) {
        const { email, id_item } = req.body;
        try {
            const user = await User.findOne({where : { email }});
            const status = await Item.update({id_user : user.id}, {where : {id : id_item}});
            return res.send({status});
        } catch (error) {
            return res.send({error: "Erro no Servidor", description : "Não foi possível recuperar as informações do usuário"});
        }
    }
}