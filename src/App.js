import logo from './logo.svg';
import './App.css';
// import React from 'react'
// 예전버전에선 여기서도 react를 불러와야 했음. 지금은 안해도 됨.



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React & Firebase
        </a>
      </header>
    </div>
  );
}

export default App;