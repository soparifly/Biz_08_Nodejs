module.exports = (sequelize, DataTypes) => {
  // tbl_product가 table의 이름 (변수, 객체)개념
  //tbl_product.findAll().. 처럼사용한다
  //tbl_products.findAll()..(X)
  //테이블이름과 실제 사용하는이름과 구분을 해줘야한다
  const product = sequelize.define(
    "tbl_product",
    {
      // autoIncrement는 STRING일경우 적용이안된다, 정수형일경우만가능
      // allowNull :false =>NOT NULL
      p_code: {
        type: DataTypes.STRING(5),
        primaryKey: true,
      },
      p_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      p_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      p_rem: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );


  //tbl_table_orders 와 tbl_product를 JOIN할수 있도록 설정
  //상품 1 : 주문서: N 관계
  //tbl_table_orders의 to_pcode칼럼과 현재 tbl_product와 연계하겠다
  //
  product.associate = (models) => {
  product.hasMany(models.tbl_table,{foreignKey : "to_pcode"})
}



  return product;
};
