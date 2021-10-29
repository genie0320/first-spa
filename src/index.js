import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React styling
// *.css의 갯수마다 각각의 <style></style> 태그가 생성된다. 
// = 작은 코드단위로 유지되긴 하지만, import 순서, 서로간의 중복관계 등에 그대로 노출된다. = 광역 scope

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
