module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users_Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_user : {
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
    return queryInterface.dropTable('Users_Events', { schema : 'web_poo' } );
  }
};