const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Learned extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Learned.init(
    {
      userId: DataTypes.INTEGER,
      wordId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Learned',
    },
  );
  return Learned;
};
