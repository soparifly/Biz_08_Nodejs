const arr1 = [100, 200, 300, 400, 500];
const [백, 이백, 삼백, 사백, 오백] = arr1;

const obj = { name: "홍길동", tel: "010-222-2222" };
let 이름 = obj.name;
console.log(이름);

let 전화 = obj.tel;
전화 = obj["tel"];
console.log(전화);

const { name, tel } = obj;
console.log(name);
console.log(tel);
