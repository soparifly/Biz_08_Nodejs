var express = require("express");
const path = require("path");
const moment = require("moment");
var router = express.Router();
const multer = require("multer");
const _storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "public", "images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: _storage });

/**
 * file upload 를 이용할수있는 메서드는
 * 두가지가 있다 dest, storage
 * dest을 이용하면 파일이름이 자동변환되어 저장되지만
 * storage 함수를 사용하면 file의 원래이름도 저장할수 있다.
 *
 */
/* GET home page. */
router.get("/", (req, res, next) => {
  db.collection("test")
    .findAll()
    .then((result) => {
      res.render("index", { GALLERY: result });
    });
});

router.post("/upload", upload.single("userfile"), (req, res) => {
  const filename = req.file.filename;
  const originalname = req.file.originalname;
  const g_writer = req.body.g_writer;
  const g_title = req.body.g_title;
  const gallery_insert = {
    g_seq: 0,
    g_date: moment().format("YYYY[-]MM[-]DD"),
    g_time: moment().format("HH:mm:ss"),
    g_writer: g_writer,
    g_title: g_title,
    g_filename: filename,
    g_fileoriginalname: originalname,
  };
  db.collection("test").create(gallery_insert).then(res.redirect("/"));
});
// tbl_gallery.create(gallery_instert);
// res.json(result);

// res.send("Uploaded : " + req.file.originalname);
//   res.json({
//     fileName: req.file.filename,
//     originalName: req.file.originalname,
//   });

module.exports = router;
