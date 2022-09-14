const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Temper", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
