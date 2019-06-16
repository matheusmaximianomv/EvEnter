module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Events_Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_tag : {
        allowNull : false,
        type : DataTypes.INTEGER
      },
      id_event : {
        allowNull : false,
        type : DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }, { schema : 'web_poo' } );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Events_Tags', { schema : 'web_poo' } );
  }
};