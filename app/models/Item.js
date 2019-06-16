module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        name: DataTypes.STRING,
        description : DataTypes.STRING,
        verified : DataTypes.BOOLEAN,
        id_user: DataTypes.INTEGER,
        id_event: DataTypes.INTEGER,
    });

    Item.associate = models => {
        Item.belongsTo(models.Event,{
            foreignKey :'id_event',
            as:'Events'
        });

        Item.belongsTo(models.User,{
            foreignKey :'id_user',
            as:'Users'
        });
    }

    return Item;
}