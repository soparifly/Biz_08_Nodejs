# Nodejs + Express + Pug 연동 POS Project

## Project 생성

- express --view=pug Oneday(2)

- 설정되어있는 dependency의 모든 버전 번호를 별표(\*)로 설정

- dependency update
  npm install cookie-parser
  npm install debug
  npm install express
  npm install http-errors
  npm install morgan
  npm install pug
  npm install

## 우리동네 김밥천국 POS 프로젝트 요구사항

- 첫화면에서 매장의 table layout 보여주기
- table layout 에서 table을 클릭하면 주문서 작성화면으로 전환
- 주문서 작성화면에서 상품(메뉴)항목을 클릭하면 주문서에 추가
- 식사 완료 후 결제방식 선택 결제화면화면 팝업
- 결제화면에서 결제수행을 "결제 완료"메시지 보여주기

### 첫화면의 table layout 보여주기

- 어떤 UI(table , div 등 ) tag로 화면을 그릴것인가
- 클릭을 했을때 어떤 방식으로 데이터를 보내고 다음화면으로 전환을 할것인가.
  ( a tag, script를 이용하기 등이 있음 , 여기에서는 script 를 이용해보도록할것.)

### 주문서 작성화면

- 이미 테이블에 주문 내용이 있으면, 주문 내용을 보여주고, 메뉴 추가가능
- 비어있는 table 이면 새로운 주문을 추가가능

### mysql 연동을 위하여 dependency 설치

npm install sequelize
npm install mysql2

### sequelize-cli를 이용한 초기화

- project folder-> sequlize init
