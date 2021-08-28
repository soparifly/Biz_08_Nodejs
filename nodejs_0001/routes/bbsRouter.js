const express = require("express");
const router = express.Router();
const moment = require("moment");

router.get("/write", (req, res) => {
  const BBS = {
    b_date: moment().format("YYYY[-]MM[-]DD"),
    b_time: moment().format("HH:mm:ss"),
  };
  res.render("write", { BBS });
});
const { tbl_bbs } = require("../models/index");
// form을 통해서 post로 전달되어온 데이터는 req .body에 담겨서 온다
//create 메소드를 호출하여 req.body를 create 메소드로 처리한다.
//result 에 리턴된 값을 담고
// res 를 통해 redirct("/")로 응답한다.
router.post("/write", (req, res) => {
  tbl_bbs.create(req, body).then((result) => res.redirect("/"));
});

router.get("/detail", (req, res) => {
  /**
   * tbl_bbs.findByPk값으로 select 하여 한개의 게시물정보를 가져온다
   * res.render("detail", {BBS:result});
   * 가져온 값을 (result)으로 BBS에 담아서 "detail"에 렌더링, 전달
   */
  const b_id = req.query.b_id;

  tbl_bbs.findByPk(b_id).then((result) => {
    res.render("detail", { BBS: result });
  });
});

router.get("/delete", (req, res) => {
  /**
   * tbl_bbs.destory -> 삭제하는 쿼리문
   * where:{ b_id }: 원래 대로라면 b_id : b_id 를 써야하지만 생략이 가능하다
   * b_id 컬럼 값이 변수 b_id에 담긴 값과 같다면 destory하라라는 명령
   * 마찬가지로 보든 처리가 끝나면 redirect 하라 라는 의미
   *
   */
  const b_id = req.query.b_id;
  tbl_bbs
    .destroy({
      where: { b_id },
    })
    .then(() => {
      res.redirect("/");
    });
});
// b_id 칼럼 에서 b_id 일치하는 값을 검색하여 한개의 값을 추출하여
// 그 결과(result)를 BBS에 담아 write에 보내라
// findByPK대신 findOne을 사용할 수 도 있다. 대신 이함수는 PK 칼럼을 사용하지 않으면
//  검색 결과로 출력되는 데이터가 2개 이상이면 오류가 발생하기 때문에 주의해서 사용해야한다
router.get("/update", (req, res) => {
  const b_id = req.query.b_id;

  tbl_bbs.findByPk(b_id).then((result) => {
    res.render("write", { BBS: result });
  });
});

module.exports = router;
