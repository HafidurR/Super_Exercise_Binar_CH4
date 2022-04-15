'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      address.belongsTo(models.client, {
        foreignKey: 'client_id'
      }),
        address.belongsTo(models.city, {
          foreignKey: 'city_id'
        })
    }
  };
  address.init({
    address_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Address description required",
        },
        notEmpty: {
          args: true,
          msg: "Address description cannot be empty",
        }
      }
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Postal code required",
        },
        notEmpty: {
          args: true,
          msg: "Postal code cannot be empty",
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
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "City_id required",
        },
        notEmpty: {
          args: true,
          msg: "City_id cannot be empty",
        },
        isInt: {
          args: true,
          msg: "Value must be an integer",
        }
      }
    }
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};