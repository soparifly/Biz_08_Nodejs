const express = require("express");
const router = express.Router();

const moment = require("moment");

const { tbl_product, tbl_table_orders } = require("../models/index");

//req.params.table_id를 getter
router.get("/order/:table_id", async (req, res) => {
  const table_id = req.params.table_id;
  //   console.log("table_id", table_id);
  const MENU = await tbl_product.findAll().then({ order: ["p_name", "ASC"] });
  res.render("order_view", { table_id, MENU });
});
//   res.send(table_id);
//   res.render("order_view", { table_id: table_id });
//   res.render("order_view", { table_id });

//param으로받는덴 문제없는데 json 값의 순서가 바뀜 왜그러는지모르겠지만 order에서 순서를 바꿔주니 원하는값이나옴
/**
 * const order_input = (menu_id, table_id) =>  이부분에 순서가 중요한지아닌지모르겠네
 */
// let menu_list = [];

router.get("/order/:table_id/input/:menu_id", (req, res) => {
  const table_id = req.params.table_id;
  const menu_id = req.params.menu_id;
  tbl_product.findByPk(menu_id).then((product) => {
    const table_orders = {
      to_table_id: table_id,
      to_pcode: menu_id,
      to_qty: 1,
      to_price: product.p_price,
      to_date: moment().format("YYYY[-]MM[-]DD"),
      to_time: moment().format("HH:mm:ss"),
    };
    tbl_table_orders.create(table_orders).then((result) => {
      //   tbl_table_orders
      //     .findAll({
      //       where: { to_table_id: table_id },
      //     })
      //     .then((order_list) => {
      //       res.json({ table_id, order_list });
      //     });
      res.json(result);
    });
  });
});

router.get("/getorder/:table_id", (req, res) => {
  const table_id = req.params.table_id;

  tbl_table_orders
    .findAll({
      where: { to_table_id: table_id, to_pay: null },
      include: [{ model: tbl_product, require: false }],
    })
    .then((result) => res.json(result));
});
//   const menu = {
//     menu_id,
//     table_id,
//     menu_name: "1000원 김밥",
//     menu_price: 1000,
//   };
//   res.json(menu);
//   console.log("menu_id", menu_id);
//   res.send("선택된 메뉴" + menu_id);
router.get("/order/:order_seq/delete", (req, res) => {
  const order_seq = req.params.order_seq;
  tbl_table_orders
    .destroy({
      where: { to_seq: order_seq },
    })
    .then(() => {
      res.send("OK");
    })
    .catch(() => {
      res.send("FAIL");
    });
});

router.get("/paycomplete/:table_id", (req, res) => {
  const table_id = req.params.table_id;

  tbl_table_orders
    .update({ to_pay: "P" }, { where: { to_table_id: table_id } })
    .then((result) => {
      console.log(result);
      res.send("OK");
    })
    .catch(() => {
      res.send("FAIL");
    });
});
module.exports = router;
