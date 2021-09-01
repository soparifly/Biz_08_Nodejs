module.exports = (seq, Type) => {
  const table_orders = seq.define("tbl_table_orders", {
    to_seq: {
      type: Type.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    to_table_id: {
      type: Type.STRING(5),
      allowNull: false,
    }, //주문이 진행중인 table_id
    to_pcode: { type: Type.INTEGER, allowNull: false }, //주문된 상품코드
    to_qty: { type: Type.INTEGER }, //수량
    to_price: { type: Type.INTEGER }, //단가
    to_date: { type: Type.STRING(10) }, // 주문한 시점 날짜
    to_time: { type: Type.STRING(10) }, //주문한 시점 시간
    to_pay: { type: Type.STRING(1) }, //  결제여부
    to_pay_qty: { type: Type.STRING(10) }, //결제 종류
  });
  // ㅠ
  table_orders.associate = (models) => {
    table_orders.belongsTo(models.tbl_product, { foreignKey: "to_pcode" });
  };
  return table_orders;
};
