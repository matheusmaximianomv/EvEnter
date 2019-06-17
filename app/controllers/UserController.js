const { User } = require('./../models');
const bcrypt = require('bcryptjs');

module.exports = {

    // Listar todos os usuários
    async index(req, res) {

    },
    // Listar apenas um usuário
    async show(req, res) {

    },
    // Cria um usuário
    async create(req, res) {
        const { email, password, name, genre, street, houseNumber, postalCode, neighborhood, city, complement, id_uf } = req.body;

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
                    return res.json(user);
                } catch (err) {
                    return res.json({ error: 'Erro ao Cadastrar', description: 'Erro no Servidor : 3', err });
                }
            });
        });


    },
    // Atualiza os dados do usuário
    async update(req, res) {

        const { email, name, genre, street, houseNumber, postalCode, neighborhood, city, complement, id_uf } = req.body;

        if (!email || !name || !genre || !street || !houseNumber || !postalCode || !neighborhood || !city || !complement || !id_uf)
            return res.send({ error: 'Erro ao Atualizar', description: 'Falha na Atualização' });

        updateUser = {
            email, name, genre, street, houseNumber, postalCode, neighborhood, city, complement, id_uf, updatedAt: Date.now
        }

        try {
            const user = await User.update({
                email, name, genre, street, houseNumber, postalCode, neighborhood, city, complement, id_uf, updatedAt: Date.now
            }, { where : {id : req.params.id }});
            return res.send({ user });
        } catch (err) {
            return res.send({ error: 'Erro ao Atualizar', description: 'Erro no Servidor', err });
        }
    },
    // Deleta um usuário
    async delete(req, res) {
        try {
            const user = await User.destroy({where : {id : req.params.id}});
            return res.send({user});
        } catch (err) {
            console.log(err);
            return res.send({ error: 'Erro ao Deletar', description: 'Erro no Servidor', err });
        }
    }

}