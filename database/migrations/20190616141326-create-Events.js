module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Events', {
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
      id_category : {
        allowNull : false,
        type : DataTypes.INTEGER
      },
      id_uf : {
        allowNull : false,
        type : DataTypes.INTEGER
      },
      street : {
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
      complement : {
        allowNull : false,
        type : DataTypes.STRING
      },
      city : {
        allowNull : false,
        type : DataTypes.STRING
      },
      private : {
        allowNull : false,
        type : DataTypes.BOOLEAN
      },
      accessCode : {
        type : DataTypes.STRING
      },
      name : {
        allowNull : false,
        type : DataTypes.STRING
      },
      description : {
        allowNull : false,
        type : DataTypes.STRING
      },
      date : {
        allowNull: false,
        type: DataTypes.DATE,
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
    return queryInterface.dropTable('Events', { schema : 'web_poo' } );
  }
};