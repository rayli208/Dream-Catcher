// Create dream table
module.exports = function(sequelize, DataTypes) {
  // var stamp = moment().format("lll");
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

  Dream.associate = function(models) {
    models.Dream.belongsTo(models.User, {
      onDelete: "CASCADE",
      validate: {
        allowNull: false
      }
    })
  }
  
  return Dream;
};
