'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      client.hasOne(models.address, {
        foreignKey: 'client_id'
      }),
      client.hasMany(models.brand, {
        foreignKey: 'client_id'
      })
    }
  };
  client.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name required",
        },
        notEmpty: {
          args: true,
          msg: "Name cannot be empty",
        }
      }
    },
    ktp_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Ktp number required",
        },
        notEmpty: {
          args: true,
          msg: "Ktp number cannot be empty",
        }
      }
    },
    npwp_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Npwp number required",
        },
        notEmpty: {
          args: true,
          msg: "Npwp number cannot be empty",
        }
      }
    }
  }, {
    sequelize,
    modelName: 'client',
  });
  return client;
};