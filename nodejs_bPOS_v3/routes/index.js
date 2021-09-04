var express = require('express');
const { tbl_table_orders, sequelize } = require("../models/index");

const { tbl_table_orders } = require("../models/index");
/* GET home page. */
router.get('/', function (req, res, next) {
  const tables_layout = new Array()
//1. table 
  /**
   * SELECT to_table_id, count(to_table_id) AS count 
   * FROM tbl_table_orders
   * WHERE to_pay IS NULL
   * GROUP BY to_table_id;
   */
  router.get("/", async (req, res, next)){
      const TABLE_COUNT = 12;
      const tables_layout = [];
      const table_order_count = await tbl_table_orders.findAll({
  
          attributes: [
              "to_table_id",
              [sequelize.fn("count",sequelize.col("to_table_id")),"count"]
          ],
          where: { to_pay: null },
          group: "to_table_id"
      });
  
    tables_data = tables_layout.map((table, (index) => {

      /**
       * table_order_count의 리스트
       * table 1, table 2에 주문이있다면
       * table_order_count 의 리스트 중에서 해당하는 데이터가 있을것이다
       * 그 데이터를 찾아달라
       */
      const result = table_order_count.find(order => {
        return order.dataValues.to_table_id == (index + 1);
      });
      //table_id가 일치하는 테이블을 찾을 경우 
      const table_data = {
        id: index + 1,
        table_name: index + 1 + "번 테이블",
      }
      if (result) {
        table_data.table_order_count = result.dataValues.count;

      } else {
        table_data.order_count = 0;

      }
    });
      return table_data;





    });
  
      res.render("index", { TABLES: tables_layout });
  
  }
});

module.exports = router;
