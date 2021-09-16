var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect(
  "mongodb+srv://kimbyulook:12341234@cluster0.jojjs.mongodb.net/Universe?retryWrites=true&w=majority",
  function (에러, client) {
    if (에러) return console.log(에러);
    db = client.db("Universe");
    //서버띄우는 코드 여기로 옮기기
    app.listen("8080", function () {
      console.log("listening on 8080");
      db.collection("test").insertOne(
        { 이름: "John", _id: 100 },
        function (에러, 결과) {
          console.log("저장완료");
        }
      );
    });
  }
);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// const sequelize = require("./models/index").sequelize;
// sequelize.sync().then((result) => {
//   console.log("HOST: ", result.options.host);
//   console.log("Database: ", result.options.database);
//   console.log("DB연결 OK");
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
