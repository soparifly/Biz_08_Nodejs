const express = require("express");
const router = express.Router();
const moment = require("moment");

const { tbl_orders, tbl_product } = require("../models/index");
// /../select주소값으로온내용을 앞으로 처리한다는 내용임
router.get("/select", (req, res) => {
  // 주소에 포함된 변수를 읽어옴. @param과같은역할
  const o_seq = req.query.o_seq;
  // 위에서 입력받은 o_seq를 아래의 DB에서 find하여 result로 적용함
  tbl_orders.findByPk(o_seq).then((result) => {
    const TABLESID = { o_table: moment().format("YYYYMMDD") };
    //요청값을 처리하고 응답할 ejs를 꺼내줌  그리고 setattribute와 같이 TABLES 에 result값을 담아 전달함
    res.render("kimbab", {
      TABLES: result,
      TABLESID,
    });

    tbl_product.findAndCountAll().then((result) => {
      res.render("kimbab", { MENU: result.rows });
    });
  });
});

module.exports = router;
