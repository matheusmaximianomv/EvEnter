module.exports = (sequelize, DataTypes) => {
    const Categorie = sequelize.define('Categorie', {
        name: DataTypes.STRING,
    });

    Categorie.associate = models => {
        Categorie.hasMany(models.Event,{
            foreignKey : 'id_category',
            as : 'Events'
        });
    }

    return Categorie;
}