'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      country.hasMany(models.province, {
        foreignKey: 'country_id'
      })
    }
  };
  country.init({
    name: DataTypes.STRING,
    country_code: DataTypes.STRING,
    phone_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'country',
  });
  return country;
};