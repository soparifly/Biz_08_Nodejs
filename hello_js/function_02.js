const 함수1 = function () {
  console.log("기본 함수 선언하기");
};

// ES+6에서 권장하는 화살표 함수 선언하기
const 함수2 = () => {
  console.log("Arrow, 화살표 함수 선언하기");
};

//매개 변수가있는 함수 선언하기
const 함수3 = function (num1, num2) {
  console.log(num1, num2, num1 + num2);
};

함수3(100, 200);

// 매개변수가 있는 화살표 함수 선언하기
const 함수4 = (num1, num2) => {
  console.log(num1, num2, num1 + num2);
};
// 매개변수가 1개만 있는 화살표함수 선언
// pretter가 적용이 안된다면 다음과 같이 선언할 수 있다
// 매개변수가 1개만 있으면 ()로 묶지 않아도된다
//  <줄이기변천사>
// const 함수5 = function (num1) { };
// const 함수5 = (num1) => { };
// const 함수5 = num1 => { };

//<<return 함수 선언>>

const 리턴함수1 = function () {
  return 300;
};
리턴함수1();
//함수를 실행하고 return 된 결과를 변수 ret1에 담아라
let ret1 = 리턴함수1();
console.log(ret1);

//return 이 있는 화살표함수

const 리턴함수2 = () => {
  let a = 100;
  let b = 200;
  return 500;
};
리턴함수2();
let ret2 = 리턴함수2();
console.log(ret2);

//화살표 함수의 매우 특별한 선언
//함수내부에 return 명령문 한개만 있는 경우
//다른 명령은 일체 없는 경우
const 리턴함수3 = () => {
  return 500 + 500;
};
const ret3 = 리턴함수3();
console.log(ret3);
const 리턴함수33 = () => 500 + 500;

// 매개변수가 있고 return 이 있는 화살표함수
const 리턴함수4 = (숫자1) => {
  return 숫자1 * 숫자1;
};
let ret4 = 리턴함수4(7);
console.log(ret4);

const 리턴함수44 = (숫자1) => 숫자1 * 숫자1;

fetch("localhost:3000")
  .then((res) => {
    res.json();
  })
  .then((result) => {
    console.log(result);
  });

