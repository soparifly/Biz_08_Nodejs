var express = require("express");
var router = express.Router();

const { tbl_products } = require("../models/index");

/* GET home page. */

router.get("/", function (req, res, next) {
  tbl_products.findAndCountAll().then((result) => {
    console.log(result);
    res.render("index", { MENU: result.rows });
  });
});
module.exports = router;
