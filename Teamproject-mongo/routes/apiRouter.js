const request = require("request");
const ApiConfig = require("./config/ServiceApi.json");
const url =
  "http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService";
//encodeURIComponent()는 URI로 데이터를 전달하기 위해서 문자열을 인코딩
const queryParams =
  "?" + encodeURIComponent("ServiceKey") + `=${ApiConfig.ServiceKey}`;
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
