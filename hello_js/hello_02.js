// JS에서 (JSON)type 객체 만들기

//black객체에 변수와 값을 동시에 추가하기
let 객체1 = {};
객체1.이름 = "이몽룡";
객체1.전화번호 = "111-1111";

//초기값이 있는 객체만들기
let 객체2 = {
  이름: "홍길동",
  전화번호: "12341234",
};
// 자바스크립트에서 객체란 일반적으로 JSON구조의 데이터 구조를 말한다

console.log(객체1);
console.log(객체2);

console.table(객체1);
console.table(객체2);

// console.table은 1개의 객체만 console에 출력하는 함수
// console.table(객체1, 객체2); 사용불가 

const 콘솔 = (m) => console.log(m);

콘솔(300 * 100);
