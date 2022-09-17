const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "temper",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
