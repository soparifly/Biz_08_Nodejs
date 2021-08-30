module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define(
    "tbl_product",
    {
      p_code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      p_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      p_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      p_rem: {
        type: DataTypes.STRING(100),
      },
    },
    { timestamps: false }
  );
  return menu;
};
