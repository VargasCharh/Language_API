const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Ratio, { foreignKey: 'id', as: 'ruId' });
      this.hasMany(models.Ratio, { foreignKey: 'id', as: 'transletId' });
      this.belongsTo(models.Language, { foreignKey: 'langId' });
      this.belongsTo(models.Category, { foreignKey: 'catId' });
      this.belongsToMany(models.User, { through: 'Learneds', foreignKey: 'wordId' });
    }
  }
  Word.init(
    {
      word: DataTypes.STRING,
      langId: DataTypes.INTEGER,
      catId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Word',
    },
  );
  return Word;
};
