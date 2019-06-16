module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('UFs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uf : {
        allowNull : false,
        type: DataTypes.STRING
      },
      description : {
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
    }, { schema : 'web_poo' });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('UFs', { schema : 'web_poo' });
  }
};