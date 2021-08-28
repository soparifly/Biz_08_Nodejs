var express = require("express");
var router = express.Router();
//models폴더에서 정보를 읽어서 tbl_bbs객체를 사용할수 있도록 선언, 초기화
// models/index.js는 ㄴmodels 폴더에 있는 table설정과 관련된 파을들을 읽어서 객체로 return 한다
// return 된 객체서 table 객체 요소만 추출하여 사용하도록 전개연산을 수행한다
const { tbl_bbs } = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  tbl_bbs.findAndCountAll().then((result) => {
    console.log(result);
    res.render("index", { BBS: result.rows });
  });
});

module.exports = router;
