const bcrypt = require("bcrypt")

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {

    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING,
    },
    username: {
      type:DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.hook("beforeCreate", function (newUser) {
    newUser.full_name = `${newUser.first_name} ${newUser.last_name}`;
    newUser.username = newUser.full_name.toLowerCase().replace(/\s/g, '');
    newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10), null);
    console.log(newUser);
  });

  User.associate = function (models) {
    models.User.hasMany(models.Dream)
  };

  return User
};