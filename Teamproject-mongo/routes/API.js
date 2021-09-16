const request = require("request");

const url =
  "http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService";
//encodeURIComponent()는 URI로 데이터를 전달하기 위해서 문자열을 인코딩
const queryParams =
  "?" +
  encodeURIComponent("ServiceKey") +
  "=VIgbL54Jr18sQamsUp0hkYlmdtwuLe0dlNvpM68Fz3DwWCZOG%2BqzkOQeLCnqzm0Ui6YqKPVe7wXr2o%2FhyZn6JQ%3D%3D";
/* Service Key*/
queryParams +=
  "&" + encodeURIComponent("solYear") + "=" + encodeURIComponent("2017"); /* */
queryParams +=
  "&" + encodeURIComponent("solMonth") + "=" + encodeURIComponent("09"); /* */

request(
  {
    url: url + queryParams,
    method: "GET",
  },
  function (error, response, body) {
    // console.log("Status", response.statusCode);
    // console.log("Headers", JSON.stringify(response.headers));
    // console.log("Reponse received", body);
    // console.log("Headers");
    if (!error & (response.statusCode === 200)) {
      console.log(body);
    } else {
      console.log("오류!!");
    }
  }
);
