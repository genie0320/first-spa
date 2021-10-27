import './App.css';
import { useState } from 'react'

// Manage React States

function App() {

  const [name, setName] = useState('Genie')
  const const [events, setEvents] = useState('initialState')
  const handleClick = () => {
    setName('Nyao!')
    console.log(name)

    // 질문 : go to 'React rendering.md'
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