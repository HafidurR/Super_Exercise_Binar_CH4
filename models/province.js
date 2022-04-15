'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      province.belongsTo(models.country, {
        foreignKey: 'country_id'
      }),
      province.hasMany(models.city, {
        foreignKey: 'province_id'
      })
    }
  };
  province.init({
    name: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'province',
  });
  return province;
};