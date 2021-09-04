module.exports = (seq, type) => {
  const product = seq.define(
    "tbl_product",
    {
      p_code: {
        type: type.STRING(5),
        primaryKey: true,
      },
      p_name: {
        type: type.STRING,
        allowNull: false,
      },
      p_price: {
        type: type.INTEGER,
        allowNull: false,
      },
      p_rem: { type: type.STRING },
    },
    { timestamps: false }
  );
  product.associate = (models) => {
    product.hasMany(models.tbl_table_orders, { foreignKey: "to_pcode" });
  };

  return product;
};
