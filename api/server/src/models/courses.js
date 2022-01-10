'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  courses.init({
    courseName: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    stripeid: DataTypes.STRING,
    description: DataTypes.STRING,
    top: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};