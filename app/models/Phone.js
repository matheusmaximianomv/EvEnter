module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define('Phone', {
        phone : DataTypes.STRING,
        id_user : DataTypes.INTEGER
    });

    Phone.associate = models => {
        Phone.belongsTo(models.User,{
            foreignKey:'id_user',
            as: 'Users'
        });
    }

    return Phone;
} 