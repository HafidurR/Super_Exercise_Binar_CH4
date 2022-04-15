'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      city.belongsTo(models.province, {
        foreignKey: 'province_id'
      }),
      city.hasMany(models.address, {
        foreignKey: 'city_id'
      })
    }
  };
  city.init({
    name: DataTypes.STRING,
    province_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};