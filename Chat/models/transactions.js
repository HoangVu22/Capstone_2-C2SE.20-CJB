const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
    bankTranNo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ordered_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ordereds',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: false
    },
    bankCode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cardType: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    responseCode: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transactions',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bankTranNo" },
        ]
      },
      {
        name: "transactions_ordered_id_foreign",
        using: "BTREE",
        fields: [
          { name: "ordered_id" },
        ]
      },
    ]
  });
};
