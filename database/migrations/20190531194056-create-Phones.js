module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      phone : {
        allowNull : false,
        type: DataTypes.STRING
      },
      id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('Phones', { schema : 'web_poo' });
  }
};

// bicho ignorante operando o sistema
// usuario sendo burro