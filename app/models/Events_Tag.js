module.exports = (sequelize, DataTypes) => {
    const Events_Tag = sequelize.define('Events_Tag', {
      id_event: DataTypes.INTEGER,
      id_tag: DataTypes.INTEGER
    });
    
    Events_Tag.associate = function(models) {
      // associations can be defined here
    };
    
    return Events_Tag;
  };