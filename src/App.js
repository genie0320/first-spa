// import logo from './logo.svg';
import './App.css';

// [ 이미지의 사용 ]
// public 폴더에 있는 것은 브라우저가 직접 접근할 수 있다.
// 현재는 src 폴더에 있는 logo.svg를,
// public 폴더로 옮기는 순간, 더이상 dynamic value가 아니게 되므로,
// 아래 코드 상에 직접 URL을 박아 넣으면 된다. 몰론 위에 1행의 import도 필요없어진다.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src='/logo.svg' className="App-logo" alt="logo" />
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