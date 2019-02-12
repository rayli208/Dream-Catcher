module.exports = function(sequelize, DataTypes) {
  var Dream = sequelize.define("Dream", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    quality_sleep: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 10
      }
    },
    length_sleep: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 12
      }
    }
  });
  return Dream;
};
