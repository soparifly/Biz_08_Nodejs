const fileUpfetch = (files, editor) => {
  const formdata = new FormData();
  formdata.append("file", files[0]);

  fetch("/file/fileUp", {
    method: "POST",
    body: formdata,
  })
    .then((res) => res.json)
    .then((result) => console.log(result));
};
// jquery의 ajx 함수를 사용하여
// file Upload하기
const fileUpAjax = (files, editor) => {
  $.ajax({
    url: "/file/fileUp",
    data: formData,
    type: "POST",
    processData: false,
    contentType: false,
  });
};
