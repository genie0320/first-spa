create-react-app 내부파일의 구조와 용도

### /node_modules : 
사용된 노드패키지를 보관. 왠만해서 쓸 일 없다.
	- favicon.ico : 파비콘이미지
	- index.html : SPA 를 만든다면 유일하게 사용될 html 파일.
	- manifest.json : PWA앱만들때 많이 사용될 파일. react 그 자체에서 사용되는 건 아니다.
	- robots.txt : 검색엔진 크롤링에 도움되는 자료. 개발자입장에선 크게 중요한게 아니지만, 기획적으로 사업적으로 중요할 수 있는 파일.

### /src : 
react 소스들이 들어갈 곳. react로 작업할 경우 99%의 파일이 이곳에 소속된다. 

	- App.js : 일반적으로 모든 react 콤포넌트들은 하나의 파일로 구성이 된다. 파일명=콤포넌트명의 !!! 첫글자가 '대문자'라는 것에 주의 !!!
	- App.css : 콤포넌트에서 사용될 css 파일.
	- index.css : 글로벌하게 사용될 css 파일.
	- logo.svg : 콤포넌트 안에서 사용되는 svg 파일. 아마도 디폴트는 리액트 로고였을 걸...
	- index.js : react 로 작성할 때 시작점이 되는 파일. 여러가지 import들이 본격적으로 이루어지는 것을 볼 수 있다. 참고로 <React.StrictMode> ~ </React.StrictMode> 추가적인 에러체크를 해주는 기능이므로 사용하는 것이 좋다.
 
### [ for Advanced User ]
    * 아직 한국 개발현장에서 쓰이는 걸 본적이 없는 파일들.
	- App.test.js : 작성할 콤포넌트를 테스트하는 파일. 이게 바로 단위테스트를 개발자가 해야 한다는 이유지.
	- setupTest.js : 위의 테스트파일을 테스트하는 파일(장난해? ㅡ.ㅡ;)
	- reportWebVitals.js : 작성하는 react 앱의 퍼포먼스를 측정하는 파일. 오... 완전 풀패키지인데... 예전보다 테스트 또는 측정에 대한 파일이 늘어난 듯.
	
### Others
- .gitignore : git sync에서 제외할 파일들 목록.
- package-lock.json, package.json : 위쪽에 있는 노드모듈 등 현재 앱의 디펜던시와 그 버전을 저장해주는 파일
- README.md : 이건 뭐 말그대로 readme.

