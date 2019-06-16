module.exports = (sequelize, DataTypes) => {
    const Users_Event = sequelize.define('Users_Event', {
        id_user: DataTypes.INTEGER,
        id_event: DataTypes.INTEGER
    });
    
    Users_Event.associate = function(models) {
      // associations can be defined here
    };
    
    return Users_Event;
  };