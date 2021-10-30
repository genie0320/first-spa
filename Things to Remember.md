# npm run start
서버시작

# React fragmentation
의미없는 <div>를 <>형태로 바꾸면, 컴파일되는 과정에서 html에 반영되지 '않는' 단일요소로 반환된다.

# map

# forEach

# filter

# destructuring 

# Spread

# event.stopPropagation(), event.preventDefault () 이해하기
https://ismydream.tistory.com/98
e.stopPropagation 은 나에게 어떤 변화가 일어났는지를 남에게 알리지 않도록, 내 선에서 끝내는 것.> Bubble Up 방지.
e.preventDefault 는 가령 a href 등에서 클릭시 링크이동을 하고, 화면을 새로고치는 것이 Default 인데, 클릭을 당했어도 그 Dafault 행동을 하지 못하게 만드는 것이.. 즉 눌러도 눌렀는지 모르게 만드는 것,
즉 onClick 이라는 이벤트의 정수만을 쏙 빼먹고, 그에 따르는 결과, 즉 default action은 피하려는 꼼수.


# Class component v. function component.


# VScode 꿀팁
0. setting으로 바로가기 ctrl + , 검색창에 아래의 키값을 입력하면 쉽게 수정할 수 있다.
1. 저장할 때마다 코드를 이쁘게 정리하기 
editor.formatOnSave => 체크
2. JSX안에서 html 쉽게 입력하기
emmet.includeLanguages => "javascript": "javascriptreact" 추가.
3. 간략한 형태의 리액트 콤포넌트 템플릿 단축키
rfc+Tab은 full 버전. 즉 지금은 필요치 않은 React import까지 하고,
_rfc+Tab은 심플버전의 템플릿을 제공한다.
4. Code 자동줄바꿈하기
나처럼 주석을 주렁주렁 달 경우에... 유용하다.
    "editor.rulers": [
        80,
        120
    ],
    "editor.wordWrap": "bounded",
    "editor.wordWrapColumn": 120