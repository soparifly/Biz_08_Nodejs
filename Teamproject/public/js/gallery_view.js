// const image_view = document.createElement("div");
// image_view.classList.add("image_view");
// image_view.innerHTML = "<img src='/images/logo.png'>";
// image_view.style.width = "400px";
// console.log(image_view);

// fetch(`/`)
//   .then((res) => res.json())
//   .then((result) => {
//     console.log("보내짐");
//   });
// document
//   .querySelector("button.btn_gallery_input")
//   .addEventListener("click", () => {
// 	alert("클릭됨");
//   });
const fileUpform = document.getElementById("fileUp");
const userfile = document.getElementById("userfile");
const image_send = document.getElementsByClassName("image_send").value;
fileUpform.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();

  console.log(image_send);
  console.log(userfile.files);
  formData.append("userfile", userfile.files[0]);

  fetch("/upload", {
    method: "POST",
    body: JSON.stringify({ formData }),
  }).catch(console.error);

  //   if (imgsend) {
  //     alert("formData");
  //     fetch("/upload", {
  //       method: "POST",
  //       body: formData,
  //     })
  //   .then((res) => res.text())
  //   .then((result) => {
  //     res.json();
  //   });
  //   }
});
