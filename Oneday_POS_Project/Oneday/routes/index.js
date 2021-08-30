var express = require("express");
var router = express.Router();

const { tbl_orders } = require("../models/index");

/* GET home page. */

router.get("/", function (req, res, next) {
  tbl_orders.findAndCountAll().then((result) => {
    console.log(result);
    res.render("index", { ORDERS: result.rows });
  });
});
module.exports = router;
