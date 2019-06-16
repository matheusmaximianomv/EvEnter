module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        name: DataTypes.STRING
    });

    Tag.associate = models => {
        Tag.belongsToMany(models.Event,{
            through: 'Events_Tag',
            as: 'Events',
            foreignKey: 'id_tag',
        });
    }

    return Tag;
}