/* Exemplo de Migration */
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      genre : {
        allowNull : false,
        type : DataTypes.STRING
      },
      street : {
        allowNull : false,
        type : DataTypes.STRING
      },
      houseNumber : {
        allowNull : false,
        type : DataTypes.STRING
      },
      postalCode : {
        allowNull : false,
        type : DataTypes.STRING
      },
      neighborhood : {
        allowNull : false,
        type : DataTypes.STRING
      },
      city : {
        allowNull : false,
        type : DataTypes.STRING 
      },
      complement : {
        allowNull : false,
        type : DataTypes.STRING
      },
      isAdmin : {
        allowNull : false,
        type : DataTypes.STRING,
        defaultValue: false,
      },
      id_uf : {
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
    return queryInterface.dropTable('Users', { schema : 'web_poo' } );
  }
};