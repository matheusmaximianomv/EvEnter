const { User, Phone } = require('./../models');
const bcrypt = require('bcryptjs');

module.exports = {

    // Listar todos os usuários
    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.send({users});
        } catch (error) {
            return res.send({ error : "Erro ", description : 'Não foi possivel listar todos os usuários'});
        }
    },
    // Listar apenas um usuário
    async show(req, res) {
        try {
            const user = await User.findOne({where : {email : req.params.email}});
            try{
                const phone = await Phone.findAll({where : {id_user : user.id}});
                return res.send({user,phone_user:phone});
            }catch(err){
                return res.send({ error : "Erro ", description : 'Não foi possivel listar o usuário'});
            }
        } catch (error) {
            return res.send({ error : "Erro ", description : 'Não foi possivel listar o usuário'});
        }
    },
    // Cria um usuário
    async create(req, res) {
        const { email, password, name, genre, street, houseNumber, postalCode, neighborhood, city, complement, id_uf, phones } = req.body;

        if (!email || !password || !name || !genre || !street || !houseNumber || !postalCode || !neighborhood || !city || !complement || !id_uf)
            return res.send({ error: 'Erro ao Cadastrar', description: 'Falha no cadastro' });

        const newUser = { email, password, name, genre, street, houseNumber, postalCode, neighborhood, city, complement, id_uf };

        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                return res.json({ error: 'Erro ao Cadastrar', description: 'Erro no Servidor : 1' });
            }
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) {
                    return res.json({ error: 'Erro ao Cadastrar', description: 'Erro no Servidor : 2' });
                }
                newUser.password = hash;
                try {
                    const user = await User.create(newUser);
                    try {
                        phones.map(async phone => {
                            await Phone.create({phone, id_user : user.id});
                        });
                        return res.json({users});
                    } catch (error) {
                        return res.json({ error: 'Erro ao Cadastrar Telefone', description: 'Erro no Servidor', err });
                    }
                } catch (err) {
                    console.log(err)
                    return res.json({ error: 'Erro ao Cadastrar', description: 'Erro no Servidor : 3', err });
                }
            });
        });


    },
    // Atualiza os dados do usuário
    async update(req, res) {

        const { name, genre, street, houseNumber, postalCode, neighborhood, city, complement, id_uf } = req.body;

        if ( !name || !genre || !street || !houseNumber || !postalCode || !neighborhood || !city || !complement || !id_uf)
            return res.send({ error: 'Erro ao Atualizar', description: 'Falha na Atualização' });

        try {
            const user = await User.update({
                name, genre, street, houseNumber, postalCode, neighborhood, city, complement, id_uf, updatedAt: Date.now
            }, { where : {email : req.params.email }});
            return res.send({ user });
        } catch (err) {
            return res.send({ error: 'Erro ao Atualizar', description: 'Erro no Servidor', err });
        }
    },
    // Deleta um usuário
    async delete(req, res) {
        try {
            const user = await User.destroy({where : {email : req.params.email}});

            return res.send({user});
        } catch (err) {
            console.log(err);
            return res.send({ error: 'Erro ao Deletar', description: 'Erro no Servidor', err });
        }
    }

}