module.exports = (sequelize, DataTypes) => {
    const UF = sequelize.define('UF', {
        uf : DataTypes.STRING,
        description : DataTypes.STRING
    });

    UF.associate = models => {
        UF.hasMany(models.User,{
            foreignKey : 'id_uf',
            as: 'Users'
        });
        UF.hasMany(models.Event,{
            foreignKey : 'id_uf',
            as: 'Events'
        });
    }

    return UF;
} 