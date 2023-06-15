const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ratio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Word, { foreignKey: 'id'});
      this.belongsTo(models.Word, { foreignKey: 'id'});
    }
  }
  Ratio.init(
    {
      ruId: DataTypes.INTEGER,
      transletId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Ratio',
    },
  );
  return Ratio;
};
