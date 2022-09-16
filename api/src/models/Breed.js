const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("breed", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
