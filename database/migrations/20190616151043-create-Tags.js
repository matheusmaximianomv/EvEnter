module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name : {
        allowNull : false,
        type : DataTypes.STRING
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
    return queryInterface.dropTable('Tags', { schema : 'web_poo' } );
  }
};