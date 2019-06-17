module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_user : {
        type : DataTypes.INTEGER
      },
      id_event : {
        allowNull : false,
        type : DataTypes.INTEGER
      },
      name : {
        allowNull : false,
        type : DataTypes.STRING
      },
      description : {
        allowNull : false,
        type : DataTypes.STRING
      },
      verified : {
        allowNull: false,
        type: DataTypes.BOOLEAN
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
    return queryInterface.dropTable('Items', { schema : 'web_poo' } );
  }
};