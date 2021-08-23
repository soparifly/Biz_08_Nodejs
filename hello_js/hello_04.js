let 배열2 = new Array();
let 배열1 = [];

// 10의 난수를 만들어
// black 배열인 배열2에 저장하고 console에 출력하기
//  Math.random()함수
//      0 부터 1미만의 임의(난수를 실수를 만드어 return 하는 함수)
//  Math.floowr()
//      실수의 소수점 이하를 잘라서 정수로 만드는 함수
for (let index = 0; index < 10; index++) {
  let rnd = Math.floor(Math.random() * 100 + 1);
  배열2.push(rnd);
}
console.log(배열2);

//배열 2에 담긴 숫자중에서 짝수만 출력하기
for (let index = 0; index < 배열2.length; index++) {
  if (배열2[index] % 2 == 0) {
    console.log(배열2[index]);
  }
}
// 배열 2에 담긴 숫자중에서 짝수만 골라서 배열3에 욺겨담기
//전통적인 for를 이용한 배열의 filtering

let 배열3 = [];
for (let i = 0; i < 배열2.length; i++) {
  if (배열2[i] % 2 == 0) {
    배열3.push(배열2[i]);
  }
}
console.log(배열3);
//ES6+에서 등장한 배열관련 함수들 중의 한가지
//for(int요소 : 배열){ }
let 배열짝수 = 배열2.filter((요소) => 요소 % 2 == 0);
console.log(배열짝수);
