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
//     alert("클릭됨");
//   });
const fileUpform = document.getElementById("fileUp");
const userfile = document.getElementById("userfile");

const image_send = document.getElementsByClassName("image_send").value;
//   console.log(userfile.files);
// 	json.push(userfile.files[0]);
// 	json.push(formDate.get('g_title'));
// 	json.push(formData.get('g_writer'));

// formData값을 함수로 호출하고 return 함
fileUpform.addEventListener("submit", (e) => {
  e.preventDefault();

  let json = [];

  const formData = new FormData(fileUpform);

	const formKey = () => {
		for (let key of formData.keys()) {
			console.log(key);
			return key;
		}
	}
	const formValue = () => {
		for (let value of formData.values()) {
			console.log(value);
			return value;
		}
	}
	
	json.add(formKey());
	json.add(formValue());
	console.log(json);
	

  //   formData.append("userfile", userfile.files[0]);
//   formData.getAll("g_title");

//   console.log(item);

  fetch("/upload", {
    method: "POST",
    body: json,
  });
// });
//   .catch(console.error);

//   if (imgsend) {
//     alert("formData");
//     fetch("/upload", {
//       method: "POST",
//       body: formData,
//     });
//   .then((res) => res.text())
//   .then((result) => {
//     res.json();
//   });
// });
