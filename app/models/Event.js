module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        name: DataTypes.STRING,
        description : DataTypes.STRING,
        private : DataTypes.BOOLEAN,
        accessCode: DataTypes.STRING,
        date: DataTypes.DATE,
        street: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        complement: DataTypes.STRING,
        city: DataTypes.STRING,
        complement: DataTypes.STRING,
        id_user: DataTypes.INTEGER,
        id_category: DataTypes.INTEGER,
        id_uf: DataTypes.INTEGER,
    });

    Event.associate = models => {
        /*Event.belongsToMany(models.User,{
            through: 'Users_Event',
            as: 'Users',
            foreignKey: 'id_event',
        });*/

        Event.belongsTo(models.User,{
            foreignKey :'id_user',
            as:'Users'
        });

        Event.belongsTo(models.Categorie,{
            foreignKey :'id_category',
            as:'Categories'
        });

        Event.belongsTo(models.UF,{
            foreignKey :'id_uf',
            as:'UFs'
        });

        Event.hasMany(models.Item,{
            foreignKey : 'id_event',
            as: 'Items'
        });

        Event.belongsToMany(models.Tag,{
            through: 'Events_Tag',
            as: 'Tags',
            foreignKey: 'id_event',
        });

    }

    return Event;
}