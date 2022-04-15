'use strict';
const {
  Model, INTEGER, NUMBER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      brand.belongsTo(models.client, {
        foreignKey: 'client_id'
      })
    }
  };
  brand.init({
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
        },
      }
    },
    is_big_brand: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Is big brand required",
        },
        notEmpty: {
          args: true,
          msg: "Is big brand cannot be empty",
        }
      }
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Client_id required",
        },
        notEmpty: {
          args: true,
          msg: "Client_id cannot be empty",
        },
        isInt: {
          args: true,
          msg: "Value must be an integer",
        }
      }
    }
  }, {
    sequelize,
    modelName: 'brand',
  });
  return brand;
};