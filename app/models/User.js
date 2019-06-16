/* Exemplo de Modelo */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
        street: DataTypes.STRING,
        houseNumber: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        city: DataTypes.STRING,
        complement: DataTypes.STRING,
        id_uf: DataTypes.INTEGER
    });

    User.associate = models => {
        User.belongsTo(models.UF,{
            foreignKey : 'id_uf',
            as: 'UFs'
        });

        /*User.belongsToMany(models.Event,{
            through: 'Users_Event',
            as: 'Events',
            foreignKey: 'id_user',
        });*/

        User.hasMany(models.Phone,{
            foreignKey : 'id_user',
            as: 'Phones'
        });

        User.hasMany(models.Event,{
            foreignKey : 'id_user',
            as: 'Events'
        });

        User.hasMany(models.Item,{
            foreignKey : 'id_user',
            as: 'Items'
        });
    }


    return User;
}