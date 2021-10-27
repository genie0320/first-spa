import './App.css';
import { useState } from 'react'

// Manage React States

function App() {
  // let name = 'Genie'
  // array destructureing : 변수명은 사실 뭘 넣어도 되지만 일반적으로 변수명, set변수명

  const [name, setName] = useState('Genie')
  
  const handleClick = () => {
    // name = 'Nyao!'
    // setName = 'Nyao!' ***  setName은 함수다.
    setName('Nyao!')
    console.log(name)
    // 이 함수가 fire 될 때에는 이미 injection이 끝난 시점이라서, 
    // btn을 눌러도 그 값이 그대로 화면에 반영되지는 않는다.
    // 따라서 데이터를 쳐다보고 있다가 그게 변경되면 화면을 다시 그려주는 누군가를 데려와야 하는데, 
    // 그게 바로 hook 이라고 불리는 존재. Hook은 여러종류가 있으며 상황에 따라 골라 써주면 된다.

    // 질문 : 
    // 이렇게 useState() 를 사용해도, 저 위에 콘솔로그의 값은 여전히 Genie에 머물러 있다.
    // 분명setName()으로 값을 바꿔줬는데, console.log에는 이전값이 들어가는 것이다. 왜???
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={ handleClick }>Change name</button>
    </div>
  );
}

export default App;