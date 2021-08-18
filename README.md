# nodejs 프로젝트

- http://nodejs.org 사이트에서 nodejs다운로드 받아 설치하기
- 특별한 경우가 아니면 버젼의 첫번째 숫자가 짝수인 버젼을 다운받는다
- nodejs 설치한 후 windows comd 창을 관리자 권한으로 열어서 몇가지 plug in을 설치한다

## NPM (Nodejs Package mansger)

- cmd 창에서 실행할 수 있는 명령
- npm install 패키지명 형식으로 명령을 입력하여 필요한 dependency, plugin등을 설치한다
- 시스템에 공통으로 사용되는 plugin들은 npm install -g plugin 형식으로 명령을 입력한다
- npm install -g 명령은 반드시 관리자 권한으로 입력해야 한다

## 최초에 설치할 package (plugin) 들

- nodemon : nodejs코드를 작성하고 저장을 하면 자동으로 재실행하여 결과를 확인할 수 있도록 도와주는 plugin
- express -generater : nodejs + express 프레임 워크 서버 어플리케이션을 작성할 때 사용하는 plugin
- create -react-app : React기반의 프론트 프로젝트를 작성할때 사용하는 plugin
- yarn : React project를 만들어서 개발을 할때 npm을 대신하여 사용하는 package관리자
